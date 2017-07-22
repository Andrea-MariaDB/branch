package server

import (
	"net/http"

	"github.com/branch-app/branch-mono-go/domain/xboxlive"
	"github.com/branch-app/branch-mono-go/libraries/log"
	"github.com/branch-app/branch-mono-go/libraries/routing"
	"github.com/branch-app/branch-mono-go/services/halo4/app"
)

func init() {
	routing.RegisterMethod("get_customgames_details", GetCustomGamesDetails, "", []string{
		"2017-07-22",
	})
}

func GetCustomGamesDetails(c *routing.Context, v int64) *log.E {
	app := c.App.(app.App)
	var identityLookup xboxlive.IdentityLookup
	if err := routing.ParseInput(c, &identityLookup, "get-customgames-details"); err != nil {
		return err
	}

	details, err := app.GetCustomGamesDetails(identityLookup)
	if err != nil {
		return err
	}

	return routing.ParseOutput(c, http.StatusOK, &details)
}
