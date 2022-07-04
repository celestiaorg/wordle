package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSubmitWordle = "submit_wordle"

var _ sdk.Msg = &MsgSubmitWordle{}

func NewMsgSubmitWordle(creator string, word string) *MsgSubmitWordle {
	return &MsgSubmitWordle{
		Creator: creator,
		Word:    word,
	}
}

func (msg *MsgSubmitWordle) Route() string {
	return RouterKey
}

func (msg *MsgSubmitWordle) Type() string {
	return TypeMsgSubmitWordle
}

func (msg *MsgSubmitWordle) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSubmitWordle) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSubmitWordle) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
