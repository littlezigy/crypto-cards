#Enrico
import random
import time
import msgpack

from nucypher.characters.lawful import Enrico


HEART_DATA_FILENAME = 'heart_data.msgpack'


def GetEnrico(policy_pubkey):
    data_source = Enrico(policy_encrypting_key=policy_pubkey)
    # data_source_public_key = bytes(data_source.stamp)
    return data_source


def EncryptData(Enrico, MessageStr):
    """
    heart_rate_data = {
        'heart_rate': heart_rate,
        'timestamp': now,
    }
    plaintext = msgpack.dumps(heart_rate_data, use_bin_type=True)
    message_kit, _signature = data_source.encrypt_message(plaintext)
    kit_bytes = message_kit.to_bytes()
    kits.append(kit_bytes)
    """
    message_kit, _signature = Enrico.encrypt_message(MessageStr.encode())
    # print("Message Kit: ")
    # print(message_kit)
    # kit_bytes = message_kit.to_bytes()
    return message_kit

