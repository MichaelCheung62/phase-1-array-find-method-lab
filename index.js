const superbowlWin = (records) => { const results =records.find(records => records.result === 'W');

     return !!results  ?  results.year :undefined
            
        }

        const recordX = [
            { year: "2018", result: "N/A"},
            { year: "2017", result: "N/A"},
            { year: "2016", result: "N/A"},
            { year: "2015", result: "W"},
            { year: "2014", result: "N/A"},
            { year: "2013", result: "L"},
            { year: "2012", result: "N/A"},
            { year: "2011", result: "N/A"},
            { year: "2010", result: "N/A"},
            { year: "2009", result: "N/A"},
            { year: "2008", result: "N/A"},
            { year: "2007", result: "N/A"},
            { year: "2006", result: "N/A"}, 
            { year: "2005", result: "N/A"},
            { year: "2004", result: "N/A"},
            { year: "2003", result: "N/A"},
            { year: "2002", result: "N/A"},
            { year: "2001", result: "N/A"},
            { year: "2000", result: "N/A"},
            { year: "1999", result: "N/A"},
            { year: "1998", result: "W"},
            { year: "1997", result: "W"}]