var request = require('request');
var results = {};

// TODO: put this function elsewhere
function convertToInt(string) {
    return parseInt(string)
}

module.exports = {
    
    lookup: function(req, res) {
        console.log("death is inevitable");
        var ticker = req.params.ticker;
        

    request('https://www.alphavantage.co/query?function=SMA&symbol=' + ticker + '&interval=daily&time_period=10&series_type=open&apikey=365B4T6IUY7YO4D7', function (error, response, body) {
        var rawReturned = JSON.parse(body);
        // TODO: Add loop here so it returns data from multiple dates
        var result = rawReturned["Technical Analysis: SMA"]["2017-10-04"].SMA;
        var resultInt = convertToInt(result);
        
        
        results.body = JSON.stringify(resultInt);
        console.log(results.body);

    });
    
        res.render("stocks/lookup.html", {title:"Lookup", ticker: ticker, results: results.body });
    }
};