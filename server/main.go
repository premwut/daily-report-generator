package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.GET("/", IndexHandler)
	e.Logger.Fatal(e.Start(":8000"))
}

func IndexHandler(c echo.Context) error {
	return c.String(http.StatusOK, "Welcome to my web service!")
}
