package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSubmitGuess = "submit_guess"

var _ sdk.Msg = &MsgSubmitGuess{}

func NewMsgSubmitGuess(creator string, word string) *MsgSubmitGuess {
	return &MsgSubmitGuess{
		Creator: creator,
		Word:    word,
	}
}

func (msg *MsgSubmitGuess) Route() string {
	return RouterKey
}

func (msg *MsgSubmitGuess) Type() string {
	return TypeMsgSubmitGuess
}

func (msg *MsgSubmitGuess) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSubmitGuess) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSubmitGuess) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
