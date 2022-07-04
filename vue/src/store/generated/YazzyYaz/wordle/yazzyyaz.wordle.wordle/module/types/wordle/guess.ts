/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "yazzyyaz.wordle.wordle";

export interface Guess {
  index: string;
  word: string;
  submitter: string;
  count: string;
}

const baseGuess: object = { index: "", word: "", submitter: "", count: "" };

export const Guess = {
  encode(message: Guess, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.word !== "") {
      writer.uint32(18).string(message.word);
    }
    if (message.submitter !== "") {
      writer.uint32(26).string(message.submitter);
    }
    if (message.count !== "") {
      writer.uint32(34).string(message.count);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Guess {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuess } as Guess;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.word = reader.string();
          break;
        case 3:
          message.submitter = reader.string();
          break;
        case 4:
          message.count = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Guess {
    const message = { ...baseGuess } as Guess;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.word !== undefined && object.word !== null) {
      message.word = String(object.word);
    } else {
      message.word = "";
    }
    if (object.submitter !== undefined && object.submitter !== null) {
      message.submitter = String(object.submitter);
    } else {
      message.submitter = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = String(object.count);
    } else {
      message.count = "";
    }
    return message;
  },

  toJSON(message: Guess): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.word !== undefined && (obj.word = message.word);
    message.submitter !== undefined && (obj.submitter = message.submitter);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(object: DeepPartial<Guess>): Guess {
    const message = { ...baseGuess } as Guess;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.word !== undefined && object.word !== null) {
      message.word = object.word;
    } else {
      message.word = "";
    }
    if (object.submitter !== undefined && object.submitter !== null) {
      message.submitter = object.submitter;
    } else {
      message.submitter = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
