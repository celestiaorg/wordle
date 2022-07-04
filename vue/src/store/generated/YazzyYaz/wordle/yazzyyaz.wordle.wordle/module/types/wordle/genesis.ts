/* eslint-disable */
import { Params } from "../wordle/params";
import { Wordle } from "../wordle/wordle";
import { Guess } from "../wordle/guess";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "yazzyyaz.wordle.wordle";

/** GenesisState defines the wordle module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  wordleList: Wordle[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  guessList: Guess[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.wordleList) {
      Wordle.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.guessList) {
      Guess.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.wordleList = [];
    message.guessList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.wordleList.push(Wordle.decode(reader, reader.uint32()));
          break;
        case 3:
          message.guessList.push(Guess.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.wordleList = [];
    message.guessList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.wordleList !== undefined && object.wordleList !== null) {
      for (const e of object.wordleList) {
        message.wordleList.push(Wordle.fromJSON(e));
      }
    }
    if (object.guessList !== undefined && object.guessList !== null) {
      for (const e of object.guessList) {
        message.guessList.push(Guess.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.wordleList) {
      obj.wordleList = message.wordleList.map((e) =>
        e ? Wordle.toJSON(e) : undefined
      );
    } else {
      obj.wordleList = [];
    }
    if (message.guessList) {
      obj.guessList = message.guessList.map((e) =>
        e ? Guess.toJSON(e) : undefined
      );
    } else {
      obj.guessList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.wordleList = [];
    message.guessList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.wordleList !== undefined && object.wordleList !== null) {
      for (const e of object.wordleList) {
        message.wordleList.push(Wordle.fromPartial(e));
      }
    }
    if (object.guessList !== undefined && object.guessList !== null) {
      for (const e of object.guessList) {
        message.guessList.push(Guess.fromPartial(e));
      }
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
