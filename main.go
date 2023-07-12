package main

import "syscall/js"

func main() {
	message := "👋 Hello World 🌍"
	document := js.Global().Get("document")
	h2 := document.Call("createElement", "h2")
	h2.Set("innerHTML", message)
	document.Get("body").Call("appendChid", h2)
	alert := js.Global().Get("alert")
	alert.Invoke(123)
	<-make(chan bool)
}
