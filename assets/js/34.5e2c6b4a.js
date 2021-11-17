(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{454:function(e,t,a){"use strict";a.r(t);var o=a(18),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"concept"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concept"}},[e._v("#")]),e._v(" Concept")]),e._v(" "),a("p",[e._v("Now, in order to better grasp some of the design choices made by BDK, it's important to understand the main concept driving the development of this project, and the goal that it's trying to\nachieve.")]),e._v(" "),a("p",[e._v("BDK is aiming first of all to be a "),a("strong",[e._v("set of libraries and tools")]),e._v(", all meant to be very reusable and adaptable. Developers working on their own wallets or other projects that are trying to integrate\nBitcoin can pick the tools they need and piece them together to prototype and quickly ship a working product. This means that the "),a("code",[e._v("bdk-cli")]),e._v(" that we've just installed is designed to be a "),a("strong",[e._v("very thin layer")]),e._v(" over the\nAPIs exposed by the various components of the library, "),a("strong",[e._v("not a full, end-user-ready Bitcoin wallet")]),e._v(".")]),e._v(" "),a("p",[e._v('This concept leads to a few design choices that are arguably very bad for the "UX" of this wallet, but that allow developers to work more directly with the underlying library. For instance:')]),e._v(" "),a("ul",[a("li",[e._v("BDK has an internal database that's used to store data about received transactions, spendable UTXOs, etc. This database is stored by default in your home folder, in "),a("code",[e._v("~/.bdk-bitcoin")]),e._v(". The database\n"),a("strong",[e._v("will never")]),e._v(" contain any data that can't be recreated purely by looking at the blockchain. Keys, descriptors, Electrum endpoints "),a("strong",[e._v("are not stored in the database")]),e._v(". This explains why you'll have to specify them every\ntime in the command line. It can be seen more like a "),a("em",[e._v("cache")]),e._v(" and can be safely deleted without risking funds.")]),e._v(" "),a("li",[e._v("BDK doesn't automatically \"monitor\" the blockchain, instead there's a "),a("code",[e._v("sync")]),e._v(" command that has to be called by the user.")]),e._v(" "),a("li",[e._v("When you create a transaction and then sign it, it's not automatically broadcast to the network. There's a "),a("code",[e._v("broadcast")]),e._v(" command that does this. Moreover, the command doesn't accept a normal Bitcoin raw transaction,\nbut instead a "),a("em",[e._v("PSBT")]),e._v(". That's because internally transactions are always moved as PSBTs, and again, the "),a("code",[e._v("broadcast")]),e._v(" command is just a very thin wrapper over the raw library call.")])]),e._v(" "),a("p",[e._v("There are probably more of these examples, but hopefully by this point you'll have more or less understood the gist of it. If you are not a developer, some parts of this will feel weird, inefficient, hard\nto understand, and that's absolutely normal. Just try to survive through the pain and you'll be rewarded!")])])}),[],!1,null,null,null);t.default=n.exports}}]);