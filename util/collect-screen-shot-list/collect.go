package main

import (
    "fmt"
    "github.com/kbinani/screenshot"
    "github.com/micmonay/keybd_event"
    "image/png"
    "os"
    "runtime"
    "time"
    "strconv"
)

var rootDirectory = "./game-screen-shots"

func keyPress(direction string) {
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
    }

    if direction == "right" {
        kb.SetKeys(keybd_event.VK_A)
    }

    //launch
    err = kb.Launching()
    if err != nil {
        panic(err)
    }

    time.Sleep(500 * time.Microsecond)
}

func takeScreenShot(tabName string, index string) {
    bounds := screenshot.GetDisplayBounds(0)

    fmt.Printf(tabName + "/" + index + "\n")

    img, err := screenshot.CaptureRect(bounds)
    if err != nil {
        panic(err)
    }

    fileName := fmt.Sprintf(rootDirectory + "/" + tabName + "/" + index + ".png")

    file, _ := os.Create(fileName)

    defer file.Close()

    png.Encode(file, img)

    fmt.Printf(fileName + "\n")

    time.Sleep(500 * time.Microsecond)
}

func zeroLeftPad(number int) string {
    if number <= 9 {
        return "0" + strconv.Itoa(number)
    }

    return strconv.Itoa(number)
}

func getTabData(tabName string) {
    for index := 0; index < 5; index++ {
        takeScreenShot(tabName, zeroLeftPad(index))
        keyPress("down")
    }
}

func main() {
    _ = os.RemoveAll(rootDirectory + "/")
    _ = os.MkdirAll(rootDirectory, os.ModePerm)

    tabNameList := [4]string{"basic", "combo", "special", "finisher"}

    for _, tabName := range tabNameList {
        _ = os.MkdirAll(rootDirectory + "/" + tabName, os.ModePerm)
        getTabData(tabName)
        keyPress("right")
    }

    fmt.Println("Hello world")
}
