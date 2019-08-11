package main

import (
	"github.com/micmonay/keybd_event"
	"runtime"
	"time"
// 	"fmt"
	"os"
)

func main() {
	kb, err := keybd_event.NewKeyBonding()
	if err != nil {
		panic(err)
	}

	// For linux, it is very important wait 2 seconds
	if runtime.GOOS == "linux" {
		time.Sleep(2 * time.Second)
	}

    args := os.Args[1:]

    direction := args[0]

    if direction == "switch-tab" {
    	kb.SetKeys(keybd_event.VK_A)
    }

    if direction == "down" {
    	kb.SetKeys(keybd_event.VK_B)
    }

// 	//set keys
// 	kb.SetKeys(keybd_event.VK_A, keybd_event.VK_B)
// 	kb.AddKey(keybd_event.VK_A)
// 	kb.AddKey(keybd_event.VK_B)
// 	kb.AddKey(keybd_event.VK_ENTER)
//
// 	//set shif is pressed
// 	kb.HasSHIFT(true)

	//launch
	err = kb.Launching()
	if err != nil {
		panic(err)
	}
	//Ouput : AB
}
