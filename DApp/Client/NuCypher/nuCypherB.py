#Bob
import json
import os
import shutil
import msgpack
import maya
import traceback
from timeit import default_timer as timer

from twisted.logger import globalLogPublisher

from nucypher.characters.lawful import Bob, Ursula, Enrico
from nucypher.crypto.kits import UmbralMessageKit
from nucypher.crypto.powers import DecryptingPower, SigningPower
from nucypher.keystore.keypairs import DecryptingKeypair, SigningKeypair
from nucypher.network.middleware import RestMiddleware

from umbral.keys import UmbralPublicKey

from nucypher.utilities.logging import SimpleObserver
from umbral.keys import UmbralPrivateKey

globalLogPublisher.addObserver(SimpleObserver())

######################
# Boring setup stuff #
######################

SEEDNODE_URL = 'http://localhos:9151'

# TODO: path joins?
TEMP_DOCTOR_DIR = "{}/doctor-files".format(os.path.dirname(os.path.abspath(__file__)))

def StartBob(Priv_Enc, Priv_Sig):
    # Remove previous demo files and create new ones
    shutil.rmtree(TEMP_DOCTOR_DIR, ignore_errors=True)

    ursula = Ursula.from_seed_and_stake_info(seed_uri=SEEDNODE_URL,
                                             federated_only=True,
                                             minimum_stake=0)

    Priv_Enc = UmbralPrivateKey.from_bytes(bytes.fromhex(Priv_Enc))
    Priv_Sig = UmbralPrivateKey.from_bytes(bytes.fromhex(Priv_Sig))

    bob_enc_keypair = DecryptingKeypair(private_key=Priv_Enc)
    bob_sig_keypair = SigningKeypair(private_key=Priv_Sig)
    enc_power = DecryptingPower(keypair=bob_enc_keypair)
    sig_power = SigningPower(keypair=bob_sig_keypair)
    power_ups = [enc_power, sig_power]

    print("Creating the Doctor ...")

    doctor = Bob(
        is_me=True,
        federated_only=True,
        crypto_power_ups=power_ups,
        start_learning_now=True,
        abort_on_learning_error=True,
        known_nodes=[ursula],
        save_metadata=False,
        network_middleware=RestMiddleware(),
    )

    print("Doctor = ", doctor)

    return doctor


def JoinPolicy(Bob, AliceSigPubkey, PolicyLabelStr):
    """
    # For the demo, we need a way to share with Bob some additional info.
    # about the policy, so we store it in a JSON file
    policy_info = {
        "policy_pubkey": policy.public_key.to_bytes().hex(),
        "alice_sig_pubkey": bytes(alicia.stamp).hex(),
        "label": label.decode("utf-8"),
    }
    alices_sig_pubkey = UmbralPublicKey.from_bytes(bytes.fromhex(policy_data["alice_sig_pubkey"]))
    label = policy_data["label"].encode()
    print("The Doctor joins policy for label '{}'".format(label.decode("utf-8")))
    doctor.join_policy(label, alices_sig_pubkey)
    """
    # alices_sig_pubkey = UmbralPublicKey.from_bytes(bytes.fromhex(AliceSigPubkey))
    label = PolicyLabelStr.encode()
    print("Bob joins policy for label '{}'".format(label.decode("utf-8")))
    Bob.join_policy(label, AliceSigPubkey)
    return True


def DecryptData(Bob, LabelStr, MessageKit, data_source_public_key, policy_pubkey, alices_sig_pubkey):
    data_source = Enrico.from_public_keys(
        {SigningPower: data_source_public_key},
        policy_encrypting_key=policy_pubkey
    )

    label = LabelStr.encode()
    print('KEY TYPE: ')
    print(str(type(alices_sig_pubkey)))
    retrieved_plaintexts = Bob.retrieve(
        label=label,
        message_kit=MessageKit,
        data_source=data_source,
        alice_verifying_key=alices_sig_pubkey
    )

    return retrieved_plaintexts
   