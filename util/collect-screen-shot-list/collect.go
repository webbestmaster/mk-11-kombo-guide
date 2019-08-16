package main

import (
    "fmt"
    "github.com/micmonay/keybd_event"
    "os"
    "runtime"
    "time"
)

var rootDirectory = "./tmp"

func keyPress(direction string) (isOk bool) {
    kb, err := keybd_event.NewKeyBonding()

    if err != nil {
        panic(err)
    }

    // For linux, it is very important wait 2 seconds
    if runtime.GOOS == "linux" {
        time.Sleep(2 * time.Second)
    }

    if direction == "down" {
        kb.SetKeys(keybd_event.VK_B)
        return true
    }

    if direction == "right" {
        kb.SetKeys(keybd_event.VK_A)
        return true
    }

    //launch
    err = kb.Launching()
    if err != nil {
        panic(err)
    }

    return false
}

func main() {
    removeAllResult := os.RemoveAll(rootDirectory + "/")

    if removeAllResult != nil {
        fmt.Println(removeAllResult)
        return
    }

    fmt.Println("Hello world")
}
