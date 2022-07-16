(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{336:function(e,t,a){"use strict";a.r(t);var o=a(6),n=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("This post is part 1 of 3 of a series. ("),t("RouterLink",{attrs:{to:"/blog/2021/01/fee-estimation-for-light-clients-part-2/"}},[e._v("Part 2")]),e._v(", "),t("RouterLink",{attrs:{to:"/blog/2021/01/fee-estimation-for-light-clients-part-3/"}},[e._v("Part 3")]),e._v(")")],1),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#introduction-what-is-fee-estimation"}},[e._v("Introduction: what is fee estimation?")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#the-problem"}},[e._v("The problem")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#the-challenges-and-the-solution"}},[e._v("The challenges and the solution")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#the-question"}},[e._v("The question")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#the-data-logger"}},[e._v("The data logger")])])])])]),e._v(" "),t("h2",{attrs:{id:"introduction-what-is-fee-estimation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction-what-is-fee-estimation"}},[e._v("#")]),e._v(" Introduction: what is fee estimation?")]),e._v(" "),t("p",[e._v("Fee estimation is the process of selecting the fee rate"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(" for a bitcoin transaction being created, according to two main factors:")]),e._v(" "),t("ul",[t("li",[e._v("The current congestion of the Bitcoin network.")]),e._v(" "),t("li",[e._v("The urgency, or lack thereof, for the transaction confirmation, i.e, its inclusion in a block.")])]),e._v(" "),t("p",[e._v("A fee rate should be adequate to the above factors: a fee too high would be a waste of money, because the same result could have been achieved with a lower expense. On the other hand, a fee rate too low would wait for a confirmation longer than planned or, even worse, the transaction could not be confirmed at all.")]),e._v(" "),t("h2",{attrs:{id:"the-problem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-problem"}},[e._v("#")]),e._v(" The problem")]),e._v(" "),t("p",[e._v("Bitcoin Core offers fee estimation through the "),t("a",{attrs:{href:"https://bitcoincore.org/en/doc/0.20.0/rpc/util/estimatesmartfee/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("estimatesmartfee")]),t("OutboundLink")],1),e._v(" RPC method, and there are also a lot of third-party "),t("a",{attrs:{href:"https://b10c.me/blog/003-a-list-of-public-bitcoin-feerate-estimation-apis/",target:"_blank",rel:"noopener noreferrer"}},[e._v("fee estimators"),t("OutboundLink")],1),e._v(" online, so do we need yet another estimator?")]),e._v(" "),t("p",[e._v("The model used by Bitcoin Core is not well suited for light-clients such as mobile wallets, even when running in pruned mode. Online estimators are lacking in terms of:")]),e._v(" "),t("ul",[t("li",[e._v("Privacy: Contacting the server leaks your IP (unless you are using Tor or a VPN), and the request timing may be used to correlate the request to a transaction broadcasted to the network soon thereafter.")]),e._v(" "),t("li",[e._v("Security: A malicious estimator could provide a high fee rate leading to a waste of money, or a low fee rate hampering the transaction confirmation.")])]),e._v(" "),t("p",[e._v("Replace By Fee (RBF) and Child Pays For Parent (CPFP) are techniques that can somewhat minimize the fee estimation problem, because one could simply underestimate the fee rate and then raise it when necessary, however:")]),e._v(" "),t("ul",[t("li",[e._v("RBF and CPFP may leak more information, such as patterns that may allow to detect the kind of wallet used, or which one of the transaction outputs is the change.")]),e._v(" "),t("li",[e._v('Requires additional interaction: the client must come back "online" to perform the fee bump. Sometimes this might be impractical or risky, for instance when using an offline signer or a multisignature with geographically distributed keys.')])]),e._v(" "),t("p",[e._v("Thus, this work is an effort to build a "),t("strong",[e._v("good fee estimator for purely peer to peer light clients")]),e._v(" such as "),t("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("neutrino"),t("OutboundLink")],1),e._v(" based ones, or at least determine whether the approach we take is infeasible and open the discussion\nfor other, better, models.")]),e._v(" "),t("p",[e._v("In the meantime, another sub-goal is pursued: attract the interest of data scientists; Indeed the initial step for this analysis consists in constructing a data set, which could also also help kickstart other studies on fee estimation or, more broadly, on the Bitcoin mempool.")]),e._v(" "),t("h4",{attrs:{id:"the-challenges-and-the-solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-challenges-and-the-solution"}},[e._v("#")]),e._v(" The challenges and the solution")]),e._v(" "),t("p",[e._v("The hardest part of doing fee estimation on a light client is the lack of information: for example, Bitcoin Core's "),t("code",[e._v("estimatesmartfee")]),e._v(" uses up to the last 1008 blocks and knows everything about the mempool"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])]),e._v(", such as the fee rate of every transaction it contains, but a light-client does not.")]),e._v(" "),t("p",[e._v("Also, there are other factors that may help doing fee estimation, such as the day of the week (the mempool usually empties during the "),t("a",{attrs:{href:"https://www.blockchainresearchlab.org/2020/03/30/a-week-with-bitcoin-transaction-timing-and-transaction-fees/",target:"_blank",rel:"noopener noreferrer"}},[e._v("weekend"),t("OutboundLink")],1),e._v(") or the time of the day to anticipate recurring daily events\n(such as the batch of "),t("a",{attrs:{href:"https://b10c.me/mempool-observations/2-bitmex-broadcast-13-utc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitmex withdrawals"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[e._v("The idea is to apply Machine Learning (ML) techniques"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),e._v(" to discover patterns over what a light-client knows and see if they are enough to achieve consistently good estimations.")]),e._v(" "),t("h4",{attrs:{id:"the-question"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-question"}},[e._v("#")]),e._v(" The question")]),e._v(" "),t("p",[e._v('We are going to use a DNN (Deep Neural Network), a ML technique in the supervised learning branch. The "ELI5" is: give a lot of example inputs and the desired output to a black box; if there are correlations between inputs and outputs,\nand there are enough examples, the black box will eventually start predicting the correct output even with inputs it has never seen before.')]),e._v(" "),t("p",[e._v("To define our inputs and outputs, we need to start from the question we want to answer. For a fee estimator this is:")]),e._v(" "),t("p",[t("em",[e._v('"Which minimum fee rate should I use if I want this transaction to be confirmed in at most '),t("code",[e._v("n")]),e._v(' blocks?"')])]),e._v(" "),t("p",[e._v("This can be translated to a table with many rows like:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("confirms_in")]),e._v(" "),t("th",[e._v("other_information")]),e._v(" "),t("th",[e._v("fee_rate")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("1")]),e._v(" "),t("td",[e._v("...")]),e._v(" "),t("td",[e._v("100.34")])]),e._v(" "),t("tr",[t("td",[e._v("2")]),e._v(" "),t("td",[e._v("...")]),e._v(" "),t("td",[e._v("84.33")])]),e._v(" "),t("tr",[t("td",[e._v("10")]),e._v(" "),t("td",[e._v("...")]),e._v(" "),t("td",[e._v("44.44")])])])]),e._v(" "),t("p",[e._v("where the "),t("code",[e._v("fee_rate")]),e._v(' column is the output we want, also called the "'),t("em",[e._v("target")]),e._v('" or "'),t("em",[e._v("label")]),e._v('" in ML terminology, and the other columns are our inputs.')]),e._v(" "),t("p",[e._v("Can we build this table just by looking at the Bitcoin blockchain? Unfortunately, we can't:\nThe main thing that's missing is an indication of when the node first saw a transaction that has been later confirmed in a block. With that knowledge we can say that the fee rate of that transaction was the exact value required to confirm\nwithin the number of blocks it actually took to be confirmed. For instance, if we see transaction "),t("code",[e._v("t")]),e._v(" when the blockchain is at height "),t("code",[e._v("1000")]),e._v(" and then we notice that "),t("code",[e._v("t")]),e._v(" has been included in block "),t("code",[e._v("1006")]),e._v(", we can deduce that the\nfee rate paid by "),t("code",[e._v("t")]),e._v(" was the exact value required to get confirmed within the next "),t("code",[e._v("6")]),e._v(" blocks.")]),e._v(" "),t("p",[e._v("So to build our model, we first need to gather these data, and machine learning needs a "),t("em",[e._v("lot")]),e._v(" of data to work well.")]),e._v(" "),t("h4",{attrs:{id:"the-data-logger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-data-logger"}},[e._v("#")]),e._v(" The data logger")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://github.com/RCasatta/bitcoin_logger",target:"_blank",rel:"noopener noreferrer"}},[e._v("data logger"),t("OutboundLink")],1),e._v(" is built with the purpose of collecting all the data we need, and it's MIT licensed open source software written in Rust.")]),e._v(" "),t("p",[e._v("We need to register the moment in time when transactions enter in the node's mempool; to be efficient and precise we should not only call the RPC endpoints but listen to "),t("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/blob/master/doc/zmq.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZMQ"),t("OutboundLink")],1),e._v(" events. Luckily, the just released bitcoin core 0.21.0 added a new "),t("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/blob/master/doc/zmq.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZMQ"),t("OutboundLink")],1),e._v(" topic "),t("code",[e._v("zmqpubsequence")]),e._v(" notifying mempool events (and block events). The logger is also listening to "),t("code",[e._v("zmqpubrawtx")]),e._v(" and "),t("code",[e._v("zmqpubrawblock")]),e._v(" topics, to make less RPC calls.")]),e._v(" "),t("p",[e._v("We are not only interested in the timestamp of the transaction entering the mempool, but also how many blocks it will take until the same transaction is confirmed.\nIn the final dataset this field is called "),t("code",[e._v("confirms_in")]),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn4",id:"fnref4"}},[e._v("[4]")])]),e._v("; if "),t("code",[e._v("confirms_in = 1")]),e._v(" it means the transaction is confirmed in the first block created after it has been seen for the first time.")]),e._v(" "),t("p",[e._v("Another critical piece of information logged by the data logger is the "),t("code",[e._v("fee_rate")]),e._v(" of the transaction, since the absolute fee value paid by a bitcoin transaction is not available nor derivable given only the transaction itself, as the inputs don't have explicit amounts.")]),e._v(" "),t("p",[e._v("All these data (apart from the time of the transaction entering in the mempool) can actually be reconstructed simply by looking at the blockchain. However, querying the bitcoin node can be fairly slow, and during the model training iterations we want to recreate the ML dataset rapidly"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn5",id:"fnref5"}},[e._v("[5]")])]),e._v(", for example whenever we need to modify or add a new field.")]),e._v(" "),t("p",[e._v("For these reasons, the logger is split into two parts: a process listening to the events sent by our node, which creates raw logs, and then a second process that uses these logs to create the final CSV dataset.\nRaw logs are self-contained: for example, they contain all the previous transaction output values for every relevant transaction. This causes some redundancy, but in this case it's better to trade some efficiency for more performance\nwhen recreating the dataset.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/img/fee-estimation-for-light-clients/high-level-graph.svg",alt:"High level graph"}})]),e._v(" "),t("p",[e._v("My logger instance started collecting data on the 18th of December 2020, and as of today (25th January 2020), the raw logs are about 16GB.")]),e._v(" "),t("p",[e._v("I expect (or at least hope) the raw logs, the CSV dataset, or the data logger will be useful also for other projects as well, like monitoring the propagation of transactions or other works involving raw mempool data. We will share raw logs data through torrent soon.")]),e._v(" "),t("p",[e._v("In the following "),t("RouterLink",{attrs:{to:"/blog/2021/01/fee-estimation-for-light-clients-part-2/"}},[e._v("Part 2")]),e._v(" we are going to talk about the dataset.")],1),e._v(" "),t("hr",{staticClass:"footnotes-sep"}),e._v(" "),t("section",{staticClass:"footnotes"},[t("ol",{staticClass:"footnotes-list"},[t("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[t("p",[e._v("The transaction fee rate is the ratio between the absolute fee expressed in satoshi, over the weight of the transaction measured in virtual bytes. The weight of the transaction is similar to the byte size, however a part of the transaction (the segwit part) is discounted, their byte size is considered less because it creates less burden for the network. "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[t("p",[e._v("mempool is the set of transactions that are valid by consensus rules (for example, they are spending existing bitcoin), broadcasted in the bitcoin peer to peer network, but they are not yet part of the blockchain. "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[t("p",[e._v("DISCLAIMER: I am not an expert data-scientist! "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[t("p",[e._v("Conceptually similar to bitcoin core "),t("code",[e._v("estimatesmartfee")]),e._v(' parameter called "blocks target", however, '),t("code",[e._v("confirms_in")]),e._v(" is the real value not the desired target. "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[e._v("↩︎")])])]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[t("p",[e._v("16GB of compressed raw logs are processed and a compressed CSV produced in about 5 minutes. "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);