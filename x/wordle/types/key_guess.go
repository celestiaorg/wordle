package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// GuessKeyPrefix is the prefix to retrieve all Guess
	GuessKeyPrefix = "Guess/value/"
)

// GuessKey returns the store key to retrieve a Guess from the index fields
func GuessKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
