var User = require("../api/user/user.model");
var Book = require("../api/book/book.model");
var uuid = require("uuid/V4");

User.findAsync((err, data) => {
  if (data.length < 1) {
    User.removeAsync().then(() => {
      User.createAsync(
        {
          uuid: uuid(),
          provider: "local",
          role: "admin",
          name: "Admin",
          email: "admin@codenx.com",
          password: "codenx"
        },
        {
          uuid: uuid(),
          provider: "local",
          name: "Test User",
          email: "user@codenx.com",
          password: "codenx"
        }
      ).then(() => {
        console.log("Finished populating users");
      });
    });
  }
});

Book.findAsync(function(err, data) {
  if (data.length < 1) {
    Book.removeAsync().then(() => {
      Book.createAsync(
        {
          uuid: uuid(),
          name: "What young India wants",
          author: "Chetan Bhagat",
          category: "Non fiction",
          price: "87",
          releaseDate: "2012-08-06",
          isbn: "812913554X;978-8129135544"
        },
        {
          uuid: uuid(),
          name: "Two States",
          author: "Chetan Bhagat",
          category: "Novel",
          price: "89",
          releaseDate: "2014-04-18",
          isbn: "8129135523;978-8129135520"
        },
        {
          uuid: uuid(),
          name: "The hunger games",
          author: "Suzanne Collions",
          category: "Novel",
          price: "279",
          releaseDate: "2013-11-12",
          isbn: "9781407157863"
        },
        {
          uuid: uuid(),
          name: "The 3 mistakes of my life",
          author: "	Chetan Bhagat",
          category: "Novel",
          price: "77",
          releaseDate: "2008-05-26",
          isbn: "8129135515;978-8129135513"
        },
        {
          uuid: uuid(),
          name: "Serious Men",
          author: "	Manu Joseph",
          category: "Novel",
          price: "280",
          releaseDate: "2010-08-01.",
          isbn: "978-0393338591"
        },
        {
          uuid: uuid(),
          name: "Revolution 2020",
          author: "	Chetan Bhagat",
          category: "Novel",
          price: "170",
          releaseDate: "2011-09-01",
          isbn: "8129118807"
        },
        {
          uuid: uuid(),
          name: 'God"s Little Soldier',
          author: "Kiran Nagarkar",
          category: "Story",
          price: "499",
          releaseDate: "2006-04-06",
          isbn: "9789350292181"
        }
      ).then(() => {
        console.log("Finished populating books");
      });
    });
  }
});
