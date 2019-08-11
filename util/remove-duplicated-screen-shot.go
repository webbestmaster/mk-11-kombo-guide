//TODO: use it - go run main.go -dir=./basic
package main

import (
	"crypto/md5"
	"encoding/hex"
	"flag"
	"fmt"
	"io"
	"os"
	"os/exec"
	"reflect"
	"strings"
)

// This type is here so we can accept a list of directories
type arrayFlags []string

func (r *arrayFlags) String() string {
	return "something"
}

func (r *arrayFlags) Set(value string) error {
	*r = append(*r, value)
	return nil
}

// getFilesInDirectories gets all the files in directories recursively
func getFilesInDirectories(dir []string) []string {
	var ret []string

	for _, item := range dir {
		// This could have been done with pure Go, but I was lazy
		c := exec.Command(`find`, item, `-type`, `f`, `-iname`, `*.png`)
		outBytes, _ := c.Output()

		files := strings.Split(string(outBytes), "\n")
		for _, fileItem := range files {
			if fileItem != "" {
				ret = append(ret, fileItem)
			}
		}
	}

	return ret
}

// getFileMd5 returns the md5 hash of a file
func getFileMd5(path string) (string, error) {
	file, err := os.Open(path)
	if err != nil {
		return ``, err
	}

	defer file.Close()

	hash := md5.New()
	if _, err := io.Copy(hash, file); err != nil {
		return ``, err
	}

	hashInBytes := hash.Sum(nil)[:16]
	ret := hex.EncodeToString(hashInBytes)

	return ret, nil
}

func main() {
	var lookInDirectories arrayFlags

	flag.Var(&lookInDirectories, `dir`, `Directory to look in`)

	flag.Parse()

	// Get all relevant files
	output := getFilesInDirectories(lookInDirectories)

	fileMap := make(map[string][]string)
	for _, file := range output {
		hash, err := getFileMd5(file)
		if err != nil {
			fmt.Println("MD5_ERROR", file, err)
		}
		fileMap[hash] = append(fileMap[hash], file)
	}

	fmt.Println("fileMap")
	keys := reflect.ValueOf(fileMap).MapKeys()
	fmt.Println(keys, len(keys))
	fmt.Println(fileMap)

	// Print dupes
	for _, item := range fileMap {
		// Do nothing if the file has no duplicates
		if len(item) <= 1 {
			continue
		}

		for i := 1; i < len(item); i++ {
			file := item[i]
			fmt.Println(file)
			exec.Command(`rm`, file).Run()
		}
		fmt.Println()
	}
}
