const links = [
    {
      label: "Week1",
      url: "week1/index.html"
    },
    {
        label: "Week2",
        url: "week2/index.html"
    },
    {
        label: "Week3",
        url: "week3/index.html"
    }
    ,
    {
        label: "Week4",
        url: "week4/index.html"
    }
    ,
    {
        label: "Week5",
        url: "week5/index.html"
    }
    ,
    {
        label: "Week6",
        url: "week6/index.html"
    }
    ,
    {
        label: "Week7",
        url: "week7/index.html"
    }
    ,
    {
        label: "Week8",
        url: "week8/index.html"
    }
    ,
    {
        label: "Week9",
        url: "week9/index.html"
    }
    ,
    {
        label: "Week10",
        url: "week10/index.html"
    }
    ,
    {
        label: "Week11",
        url: "week11/index.html"
    }
    ,
    {
        label: "Week12",
        url: "week12/index.html"
    }
    ,
    {
        label: "Week13",
        url: "week13/index.html"
    }
    ,
    {
        label: "Week14",
        url: "week14/index.html"
    }
  ]

  var output = '';
  for (var i = 0; i < links.length; i++){
      output += `<li> <a href=${links[i].url}> ${links[i].label}</a> </li>`;
  }

  document.getElementById('links').innerHTML = output;
