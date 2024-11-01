(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{401:function(e,t,n){"use strict";n.r(t);var i=n(7),o=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("The bitcoindevkit team has been hard at work for Q2 in 2024, pushing to stabilize the API of its "),t("code",[e._v("bdk_wallet")]),e._v(" crate and releasing 4 new alpha versions (9, 10, 11, and 12!), and aiming to release a 1.0 beta in July. Here are some of the notable changes and upgrades to the software libraries we maintain:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Update "),t("code",[e._v("bdk_electrum")]),e._v(" to use merkle proofs.")]),e._v(" This PR is the first step in reworking "),t("code",[e._v("bdk_electrum")]),e._v(" to use merkle proofs. When we fetch a transaction, we now also obtain the merkle proof and block header for verification. We then confirm a transaction is in a block only after validating it's Merkle proof.")]),e._v(" "),t("li",[t("strong",[e._v("Upgrade of rust-bitcoin and rust-miniscript.")]),e._v(" We upgraded our dependencies on these crates to the latest "),t("code",[e._v("0.32.0")]),e._v(" and "),t("code",[e._v("0.12.0")]),e._v(" respectively.")]),e._v(" "),t("li",[t("strong",[e._v("Added examples.")]),e._v(" We added examples and cleaned up our current example crates to help builders stay up-to-date on the latest changes.")]),e._v(" "),t("li",[t("strong",[e._v("Use bitcoin::Amount in most public APIs.")]),e._v(" This change ensures type safety when requiring and providing bitcoin amount in our APIs, using the rust-bitcoin crate "),t("code",[e._v("Amount")]),e._v(" type.")]),e._v(" "),t("li",[t("strong",[e._v("Introduce Sync and FullScan related types.")]),e._v(" This change introduced universal structures that represent sync/full-scan requests/results for all SPK-based syncing clients.")]),e._v(" "),t("li",[t("strong",[e._v("Allow user provided RNG.")]),e._v(" This change makes the "),t("code",[e._v("rand")]),e._v(" dependency optional.")])]),e._v(" "),t("p",[e._v("The language bindings for iOS, Android, and Python have also seen some new alpha release and a ton of new features, in preparation for the beta release.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Upgrade to the latest uniffi (0.28.0).")]),e._v(" This was a major upgrade that gave us a whole new set of functionalities: the ability to implement traits in the foreign languages, using the "),t("code",[e._v("Display")]),e._v(" trait to auto-generate the "),t("code",[e._v("toString()")]),e._v(" methods, enable API docs in the UDL file, and support for async!")]),e._v(" "),t("li",[t("strong",[e._v("Brand new iOS build workflow.")]),e._v(" This one is nerdy but a goodie. Anyone interested in how we build bindings should check out this major cleanup of our iOS library build workflow!")]),e._v(" "),t("li",[t("strong",[e._v("Starting the work on bitcoin-ffi.")]),e._v(" The team has started the work on a separate crate called "),t("a",{attrs:{href:"https://github.com/bitcoindevkit/bdk-ffi",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitcoin-ffi"),t("OutboundLink")],1),e._v(", effectively migrating the types we exposed from rust-bitcoin into a standalone crate that other projects building on uniffi can use.")])]),e._v(" "),t("h3",{attrs:{id:"our-grantees-in-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#our-grantees-in-action"}},[e._v("#")]),e._v(" Our Grantees in Action")]),e._v(" "),t("p",[e._v("In addition to our full-time grantees, the "),t("a",{attrs:{href:"https://bitcoindevkit.org/foundation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("BDK Foundation"),t("OutboundLink")],1),e._v(" provides part-time grants to folks on special projects. Q2 is funding 2 projects in particular:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Wei Chen.")]),e._v(" Wei has been contributing to BDK since late 2023 and was formerly a full stack Java developer based in Washington D.C. with ten years of experience. The focus of his contributions will be towards assisting with the restructuring of the electrum crate, reengineering of the TxGraph data components to simplify the tracking of lineal conflicts, as well as on performance optimization and the continued debugging of BDK.")]),e._v(" "),t("li",[t("strong",[e._v("Manuel Gatti.")]),e._v(" Manuel is a Project Manager at Wizard Sardine. He is involved in some educational projects related to bitcoin in Italy and hosts an Italian podcast about libertarian philosophy with episodes dedicated to bitcoin as a tool for freedom. He has been contributing to BDK since April 2023 mostly on the project management side (holding calls, helping with triage and prioritization, updating stakeholders). His project consists of conducting user interviews in order to get feedback on BDK usage and possible pain points with the aim to help the team with the definition and prioritization of the development activities.")])]),e._v(" "),t("p",[e._v("We've also been active at conferences!")]),e._v(" "),t("ul",[t("li",[e._v("Evan made his way to South Korea to host a workshop at the "),t("a",{attrs:{href:"https://www.bitcoinseoul.kr/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitcoin Seoul"),t("OutboundLink")],1),e._v(" conference.")]),e._v(" "),t("li",[e._v("Evan and ValuedMammal also made their way to the "),t("a",{attrs:{href:"https://btcplusplus.dev/conf/ba24",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitcoin++ conference in Buenos Aires"),t("OutboundLink")],1),e._v(" to talk about BDK.")]),e._v(" "),t("li",[e._v("thunderbiscuit was in Montreal for the "),t("a",{attrs:{href:"https://canadianbitcoinconf.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Canadian Bitcoin Conference"),t("OutboundLink")],1),e._v(" again this year. A fantastic event with many users of BDK present!")])]),e._v(" "),t("h3",{attrs:{id:"bdk-in-the-wild"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bdk-in-the-wild"}},[e._v("#")]),e._v(" BDK in the Wild")]),e._v(" "),t("ul",[t("li",[e._v("In Q2, "),t("a",{attrs:{href:"https://bitkey.world/en-US",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitkey"),t("OutboundLink")],1),e._v(" open sourced their app, making it one of the biggest users of BDK on mobile.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.bullbitcoin.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bull Bitcoin"),t("OutboundLink")],1),e._v(" released their "),t("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.bullbitcoin.mobile",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android app"),t("OutboundLink")],1),e._v(" based on the bdk-flutter library at the Canadian Bitcoin Conference in Montreal!")])])])}),[],!1,null,null,null);t.default=o.exports}}]);