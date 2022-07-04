/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "yazzyyaz.wordle.wordle";

export interface MsgSubmitWordle {
  creator: string;
  word: string;
}

export interface MsgSubmitWordleResponse {}

export interface MsgSubmitGuess {
  creator: string;
  word: string;
}

export interface MsgSubmitGuessResponse {
  title: string;
  body: string;
}

const baseMsgSubmitWordle: object = { creator: "", word: "" };

export const MsgSubmitWordle = {
  encode(message: MsgSubmitWordle, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.word !== "") {
      writer.uint32(18).string(message.word);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitWordle {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitWordle } as MsgSubmitWordle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.word = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitWordle {
    const message = { ...baseMsgSubmitWordle } as MsgSubmitWordle;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.word !== undefined && object.word !== null) {
      message.word = String(object.word);
    } else {
      message.word = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitWordle): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.word !== undefined && (obj.word = message.word);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitWordle>): MsgSubmitWordle {
    const message = { ...baseMsgSubmitWordle } as MsgSubmitWordle;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.word !== undefined && object.word !== null) {
      message.word = object.word;
    } else {
      message.word = "";
    }
    return message;
  },
};

const baseMsgSubmitWordleResponse: object = {};

export const MsgSubmitWordleResponse = {
  encode(_: MsgSubmitWordleResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitWordleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSubmitWordleResponse,
    } as MsgSubmitWordleResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitWordleResponse {
    const message = {
      ...baseMsgSubmitWordleResponse,
    } as MsgSubmitWordleResponse;
    return message;
  },

  toJSON(_: MsgSubmitWordleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSubmitWordleResponse>
  ): MsgSubmitWordleResponse {
    const message = {
      ...baseMsgSubmitWordleResponse,
    } as MsgSubmitWordleResponse;
    return message;
  },
};

const baseMsgSubmitGuess: object = { creator: "", word: "" };

export const MsgSubmitGuess = {
  encode(message: MsgSubmitGuess, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.word !== "") {
      writer.uint32(18).string(message.word);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitGuess {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitGuess } as MsgSubmitGuess;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.word = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitGuess {
    const message = { ...baseMsgSubmitGuess } as MsgSubmitGuess;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.word !== undefined && object.word !== null) {
      message.word = String(object.word);
    } else {
      message.word = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitGuess): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.word !== undefined && (obj.word = message.word);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitGuess>): MsgSubmitGuess {
    const message = { ...baseMsgSubmitGuess } as MsgSubmitGuess;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.word !== undefined && object.word !== null) {
      message.word = object.word;
    } else {
      message.word = "";
    }
    return message;
  },
};

const baseMsgSubmitGuessResponse: object = { title: "", body: "" };

export const MsgSubmitGuessResponse = {
  encode(
    message: MsgSubmitGuessResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitGuessResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitGuessResponse } as MsgSubmitGuessResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitGuessResponse {
    const message = { ...baseMsgSubmitGuessResponse } as MsgSubmitGuessResponse;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitGuessResponse): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSubmitGuessResponse>
  ): MsgSubmitGuessResponse {
    const message = { ...baseMsgSubmitGuessResponse } as MsgSubmitGuessResponse;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SubmitWordle(request: MsgSubmitWordle): Promise<MsgSubmitWordleResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SubmitGuess(request: MsgSubmitGuess): Promise<MsgSubmitGuessResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SubmitWordle(request: MsgSubmitWordle): Promise<MsgSubmitWordleResponse> {
    const data = MsgSubmitWordle.encode(request).finish();
    const promise = this.rpc.request(
      "yazzyyaz.wordle.wordle.Msg",
      "SubmitWordle",
      data
    );
    return promise.then((data) =>
      MsgSubmitWordleResponse.decode(new Reader(data))
    );
  }

  SubmitGuess(request: MsgSubmitGuess): Promise<MsgSubmitGuessResponse> {
    const data = MsgSubmitGuess.encode(request).finish();
    const promise = this.rpc.request(
      "yazzyyaz.wordle.wordle.Msg",
      "SubmitGuess",
      data
    );
    return promise.then((data) =>
      MsgSubmitGuessResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
