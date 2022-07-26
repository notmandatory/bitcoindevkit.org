(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{362:function(t,a,e){"use strict";e.r(a);var s=e(6),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v('This article should serve as a "getting started" guide for developers who are considering integrating BDK in their projects: it tries to introduce the reader to the basic concepts behind the library and some of its modules and components that can be used to build a very simple functioning Bitcoin wallet. All the information written in this article are valid for the latest '),a("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("published version"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"design-goals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-goals"}},[t._v("#")]),t._v(" Design Goals")]),t._v(" "),a("p",[t._v("The main goal of the library is to be a solid foundation for Bitcoin wallets of any kind, on any platform: in practice, this means that the library should be:")]),t._v(" "),a("ul",[a("li",[t._v("Very "),a("em",[t._v("well-reviewed")]),t._v(" and tested")]),t._v(" "),a("li",[a("em",[t._v("Lightweight")]),t._v(", so that it can be used easily on mobile devices as well")]),t._v(" "),a("li",[a("em",[t._v("Extendable")]),t._v(", so that it can be adapted to perfectly suit different use-cases")]),t._v(" "),a("li",[a("em",[t._v("Generalized")]),t._v(", meaning that it supports different types of Bitcoin scripts and wallets through the use of "),a("a",{attrs:{href:"/descriptors"}},[t._v("descriptors")])]),t._v(" "),a("li",[a("em",[t._v("Reasonably easy")]),t._v(' to use, exposing a "high level" interface to the user and hiding all the complexity inside')])]),t._v(" "),a("p",[t._v("These goals have a direct impact on the design of the internal components of the library, and as a consequence on the APIs that are exposed to the final user, which might in some cases feel counter-intuitive at first.\nThroughout the article, we will try to focus on those points and try to explain them as best as we can.")]),t._v(" "),a("h2",{attrs:{id:"the-wallet-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-wallet-structure"}},[t._v("#")]),t._v(" The "),a("code",[t._v("Wallet")]),t._v(" Structure")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/wallet/struct.Wallet.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Wallet")]),a("OutboundLink")],1),t._v(" structure is in many ways the heart of the library: it represents an instance of a wallet and exposes some APIs to perform all the typical operations one might want to do with a Bitcoin wallet, such as generating a new address, listing the transactions received, creating a transaction, etc.")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("Wallet")]),t._v(" instance can be constructed given at least one "),a("a",{attrs:{href:"/descriptors"}},[t._v("descriptor")]),t._v(" which would be used to derive both "),a("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/enum.KeychainKind.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("External")]),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/enum.KeychainKind.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Internal")]),a("OutboundLink")],1),t._v(" addresses, or two if one prefers to keep them separated. "),a("code",[t._v("External")]),t._v(" addresses are the ones returned by the generic "),a("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/wallet/struct.Wallet.html#method.get_address",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Wallet::get_address()")]),a("OutboundLink")],1),t._v(" call, while "),a("code",[t._v("Internal")]),t._v(" addresses are generated internally to receive the change whenever a new transaction is created. But they can be generated on demand too using "),a("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/wallet/struct.Wallet.html#method.get_internal_address",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Wallet::get_internal_address()")]),a("OutboundLink")],1),t._v(" call.")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("Wallet")]),t._v(" also needs at least one other component to function properly, its "),a("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/database/trait.Database.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Database")]),a("OutboundLink")],1),t._v(": it will be used as a "),a("em",[t._v("cache")]),t._v(" to store the list of transactions synchronized with the blockchain, the UTXOs, the addresses generated, and a few other things. It's important to note that the "),a("code",[t._v("Database")]),t._v(" will never store any secret. Securely storing keys is explicitly left to the user of the library to implement, mainly because there isn't really one good way to do it, that would work reliably on every platform. On\nmobile devices, for instance, the OS' keychain could be used, to allow unlocking the secrets with the use of biometric data (FaceID or fingerprint), while on desktop platform there isn't generally a similar framework available and the user would have to implement something that meets their needs. It's not excluded that in the future we could provide a \"reference implementation\" of secure multi-platform storage for keys, but that would very likely be released as a separate module outside of the "),a("code",[t._v("Wallet")]),t._v(" structure, or potentially even as a separate library that could be reused for other applications as well.")]),t._v(" "),a("p",[t._v("Going back to our "),a("code",[t._v("Wallet")]),t._v(": given a descriptor and a "),a("code",[t._v("Database")]),t._v(' we can build an "air-gapped" or "Offline" wallet. Basically, we can make a wallet that physically can\'t connect to the Bitcoin network. It will still be able to generate addresses and sign '),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("PSBTs"),a("OutboundLink")],1),t._v(", but with a greatly reduced attack surface because a sizable part of the code that handles the logic to synchronize with the network would be entirely omitted in the final executable binary.")]),t._v(" "),a("p",[t._v("This is how a "),a("code",[t._v("Wallet")]),t._v(" can be created. Notice that we are using "),a("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/database/memory/struct.MemoryDatabase.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MemoryDatabase")]),a("OutboundLink")],1),t._v(" as our "),a("code",[t._v("Database")]),t._v(". We'll get to that in a second.")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bitcoin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Network")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemoryDatabase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wallet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddressIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dyn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" external_descriptor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"wpkh(tprv8ZgxMBicQKsPdy6LMhUtFHAgpocR8GC6QmwMSFpZs7h6Eziw3SpThFfczTDh5rW2krkqffa11UpX3XkeTTB2FvzZKWXqPY54Y6Rq4AQ5R8L/84'/0'/0'/0/*)\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" internal_descriptor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"wpkh(tprv8ZgxMBicQKsPdy6LMhUtFHAgpocR8GC6QmwMSFpZs7h6Eziw3SpThFfczTDh5rW2krkqffa11UpX3XkeTTB2FvzZKWXqPY54Y6Rq4AQ5R8L/84'/0'/0'/1/*)\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wallet")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemoryDatabase")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wallet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            external_descriptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Some")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("internal_descriptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Network")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Testnet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemoryDatabase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Once we have our "),a("code",[t._v("Wallet")]),t._v(" instance we can generate a new address and print it out:")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" address "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddressIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Generated Address: {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Building and running this code will print out:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Generated Address: tb1q7w0t936xp5p994qx506xj53gjdcmzjr2mkqghn\n")])])]),a("p",[t._v("Before we've talked about the benefits of an air-gapped wallet, but we should also talk about the disadvantages: the biggest one is the fact that it cannot create new transactions because it doesn't know which UTXOs belong to the wallet. To get this information we generally need to "),a("code",[t._v("sync")]),t._v(" with the network, but this wallet can't physically do that.")]),t._v(" "),a("p",[t._v("To fix this we can add one more component in our code: a "),a("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/blockchain/trait.Blockchain.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Blockchain")]),a("OutboundLink")],1),t._v(" backend. In particular, we are going to use the "),a("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/blockchain/electrum/struct.ElectrumBlockchain.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ElectrumBlockchain")]),a("OutboundLink")],1),t._v(" which syncs with an "),a("code",[t._v("Electrum")]),t._v(" server, and then we will use this blockchain to "),a("code",[t._v("sync")]),t._v(" our wallet database with current state of the network since that's available out of the box in BDK and is pretty fast.")]),t._v(" "),a("p",[t._v("We can update our code to look something like this:")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("blockchain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElectrumBlockchain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bitcoin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Network")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemoryDatabase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("electrum_client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wallet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddressIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ssl://electrum.blockstream.info:60002"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" blockchain "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElectrumBlockchain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Specifically here, we create an "),a("code",[t._v("ElectrumBlockchain")]),t._v(" and connect to Blockstream's public Electrum Testnet servers over SSL.")]),t._v(" "),a("p",[t._v("Now, since we are running in the "),a("code",[t._v("Testnet")]),t._v(" network, we can try to get some funds from a faucet online to this address we've generated. Once we have an incoming transaction we can do the first "),a("code",[t._v("sync")]),t._v(" of our wallet.\nThis is again something that might seem counterintuitive at first: why do we have to manually ask the "),a("code",[t._v("Wallet")]),t._v(" to "),a("em",[t._v("sync")]),t._v(" itself? Can't it do it periodically in background? The answer is that yes, that would definitely be possible, but it would remove some control on what's happening inside the wallet from the user. This can be especially problematic on mobile platforms, where the OS tries very aggressively to suspend apps in background to save battery. Having a thread running and trying to make network requests while the app is in background would very likely cause errors or potentially crashes somewhere. So, for this reason this operation has to be performed manually, to allow the user to call that function only at the right time.")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SyncOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\nwallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("blockchain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SyncOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("SyncOptions")]),t._v(" determines some sync time behaviors, like progress update, etc. For this case the "),a("code",[t._v("default")]),t._v(" sync option with no progress update is adequate. This will make queries to the Electrum server and store the list of transactions and UTXOs in our "),a("code",[t._v("Database")]),t._v(". In this case, we are using a "),a("code",[t._v("MemoryDatabase")]),t._v(", so those data are only going to be kept in RAM and dropped once our "),a("code",[t._v("Wallet")]),t._v(" is dropped. This is very useful for playing around and experimenting, but not so great for real-world wallets: for that, you can use "),a("a",{attrs:{href:"https://docs.rs/sled/",target:"_blank",rel:"noopener noreferrer"}},[t._v("sled"),a("OutboundLink")],1),t._v(" which is supported out of the box, or even use a custom database. More on that later!")]),t._v(" "),a("p",[t._v("So, now that we've synced with the blockchain we can create our first transaction. First of all, we will print out the balance of our wallet to make sure that our wallet has seen the incoming transaction. Then we will create the actual transaction and we will specify some flags using the "),a("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/wallet/tx_builder/index.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("TxBuilder")]),a("OutboundLink")],1),t._v(". To finish it off, we will ask the wallet to sign the transaction and then broadcast it to the network.")]),t._v(" "),a("p",[t._v("Right now we will not get into details of all the available options in "),a("code",[t._v("TxBuilder")]),t._v(' since that is definitely out of the scope of a "getting started" guide. For now, you can just imagine the builder as your way to tell the library how to build transactions. We\'ll come back to this in a future article.')]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("bitcoin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FromStr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" balance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_balance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wallet balance in SAT: {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" balance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" faucet_address "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from_str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mkHS9ne12qx9pS9VojpwU5xtRd4T7X7ZUt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" tx_builder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build_tx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntx_builder\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_recipient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("faucet_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("script_pubkey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" balance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable_rbf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" psbt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tx_details"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tx_builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("finish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Transaction details: {:#?}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tx_details"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("In this case, we are sending back half the balance to the faucet's address and we are also enabling RBF since the default fees are at 1 satoshi/vbyte. With RBF we will be able to "),a("em",[t._v("bump the fees")]),t._v(" of the transaction, should it get stuck in the mempool due to the low fee rate.")]),t._v(" "),a("p",[t._v("All that's left to do once we have our unsigned PSBT is to sign it:")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SignOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" finalized "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" psbt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SignOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("assert!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finalized"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tx has not been finalized"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Transaction Signed: {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" finalized"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("And then broadcast it:")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("blockchain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blockchain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" raw_transaction "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" psbt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extract_tx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" txid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" raw_transaction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("txid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nblockchain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("broadcast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("raw_transaction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Transaction sent! TXID: {txid}.\\nExplorer URL: https://blockstream.info/testnet/tx/{txid}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    txid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" txid\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"custom-database-and-blockchain-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-database-and-blockchain-types"}},[t._v("#")]),t._v(" Custom Database and Blockchain types")]),t._v(" "),a("p",[t._v("We briefly mentioned before that for our example we used the "),a("code",[t._v("MemoryDatabase")]),t._v(", but that it could also be swapped for a different one: this is one example of the "),a("em",[t._v("modularity")]),t._v(" of BDK. By default, some database types are already implemented in the library, namely the "),a("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/database/memory/struct.MemoryDatabase.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MemoryDatabase"),a("OutboundLink")],1),t._v(" which only keeps data in RAM, the "),a("a",{attrs:{href:"https://docs.rs/sled/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sled"),a("OutboundLink")],1),t._v(" database that can store data on a filesystem, and the "),a("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/database/struct.SqliteDatabase.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SqliteDatabase"),a("OutboundLink")],1),t._v(" that can store data into a SQLite database. But since the "),a("code",[t._v("Database")]),t._v(" trait is public, users of the library can also implement different database types more suitable for their use-case.")]),t._v(" "),a("p",[t._v("The same is true for the "),a("code",[t._v("Blockchain")]),t._v(" types: the library provides (through the use of opt-in features) implementations for the "),a("code",[t._v("Electrum")]),t._v(", "),a("code",[t._v("Esplora")]),t._v(", "),a("code",[t._v("CompactFilters")]),t._v(" ("),a("em",[t._v("Neutrino")]),t._v(") and Bitcoin Core "),a("code",[t._v("rpc")]),t._v(" backends. Those again can also be\nswapped with custom types if the user desires to do so.")]),t._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),a("p",[t._v("Hopefully, this article will help you get started with BDK! This is just a very quick and gentle introduction to the library, and only barely scratches the surface of what's inside: we will keep publishing more articles in the future to explain some of the more advanced features of BDK, like key generation, using complex "),a("a",{attrs:{href:"/descriptors"}},[t._v("descriptors")]),t._v(" with multiple keys and/or timelocks, using external signers, etc.")]),t._v(" "),a("p",[t._v("If you'd like to learn more about the library feel free to ask any questions in the comment section down below, or join our "),a("a",{attrs:{href:"https://discord.gg/d7NkDKm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord Community"),a("OutboundLink")],1),t._v(" to chat with us directly!")])])}),[],!1,null,null,null);a.default=n.exports}}]);