(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{440:function(e,t,a){"use strict";a.r(t);var o=a(18),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("This post is part 2 of 3 of a series. ("),a("RouterLink",{attrs:{to:"/blog/2021/01/fee-estimation-for-light-clients-part-1/"}},[e._v("Part 1")]),e._v(", "),a("RouterLink",{attrs:{to:"/blog/2021/01/fee-estimation-for-light-clients-part-3/"}},[e._v("Part 3")]),e._v(")")],1),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#the-dataset"}},[e._v("The dataset")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#the-mempool"}},[e._v("The mempool")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#the-outliers"}},[e._v("The outliers")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#recap"}},[e._v("Recap")])])])])]),e._v(" "),a("h2",{attrs:{id:"the-dataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-dataset"}},[e._v("#")]),e._v(" The dataset")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://storage.googleapis.com/bitcoin_log/dataset_18.csv.gz",target:"_blank",rel:"noopener noreferrer"}},[e._v("dataset"),a("OutboundLink")],1),e._v(" is publicly available (~500MB gzip compressed, ~2GB as plain CSV).")]),e._v(" "),a("p",[e._v("The output of the model is the fee rate, expressed in "),a("code",[e._v("[satoshi/vbytes]")]),e._v(".")]),e._v(" "),a("p",[e._v("What about the inputs? Generally speaking, we have two main requirements for what can be included as input for our model:")]),e._v(" "),a("ul",[a("li",[e._v("It must be correlated to the output, even with a non-linear relation.")]),e._v(" "),a("li",[e._v("It must be available to a light client: for instance, assuming to have knowledge and an index of the last 1000 blocks is considered too much.")])]),e._v(" "),a("p",[e._v("To evaluate the approach we are taking, we also want to compare our model's results with another available estimation: for this reason the dataset includes data to compute the error agains Bitcoin Core's "),a("code",[e._v("estimatesmartfee")]),e._v(" results, even though we are not going to use it for this model.")]),e._v(" "),a("p",[e._v("The dataset will contain only transactions that spend already confirmed inputs. If we wanted to include transactions with unconfirmed inputs as well, the fee rate would have to be computed as a whole;\nfor example if transaction "),a("code",[e._v("t2")]),e._v(" spends an unconfirmed input from "),a("code",[e._v("t1")]),e._v(" (while "),a("code",[e._v("t1")]),e._v(" only spends confirmed inputs, and all its other outputs are unspent), the aggregated fee rate would have to be used.\nSupposing "),a("code",[e._v("f()")]),e._v(" is extracts the absolute fee and "),a("code",[e._v("w()")]),e._v(" the transaction weight, the aggregated fee rate would be "),a("code",[e._v("(f(t1) + f(t2)) / (w(t1) + w(t2))")]),e._v(". Thus, as already said previously, to keep things simple the model simply discards all the transaction\nthat would need to perform this computation.")]),e._v(" "),a("p",[e._v("For the same reason the dataset has the "),a("code",[e._v("parent_in_cpfp")]),e._v(" flag. When a transaction has inputs confirmed (so it's not excluded by the previous rule) but one or more of its output have been spent by a transaction confirmed in the same block, "),a("code",[e._v("parent_in_cpfp")]),e._v(" is "),a("code",[e._v("1")]),e._v(".\nTransactions with "),a("code",[e._v("parent_in_cpfp = 1")]),e._v(" are included in the dataset but excluded by the current model, since the miner probably considered an aggregated fee rate while picking the transactions to build a block.")]),e._v(" "),a("h4",{attrs:{id:"the-mempool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-mempool"}},[e._v("#")]),e._v(" The mempool")]),e._v(" "),a("p",[e._v("The most important input of our model is the current "),a("em",[e._v("status")]),e._v(' of the mempool itself. However, we cannot feed the model with a list of the fee rate of every unconfirmed transaction, because this array would have a variable length.\nTo overcome this, the transaction contained in the mempool are grouped in "buckets" which are basically subsets of the mempool where all the transactions contained in a bucket have a similar fee rate. In particular we only care about the\n'),a("em",[e._v("number")]),e._v(" of transaction in every "),a("em",[e._v("bucket")]),e._v(", not which transactions it contains.")]),e._v(" "),a("p",[e._v("The mempool buckets array is defined by two parameters, the "),a("code",[e._v("percentage_increment")]),e._v(" and the "),a("code",[e._v("array_max")]),e._v(" value.\nStarting from the minimum fee rate value "),a("code",[e._v("min_relay_fee=1.0")]),e._v(", the "),a("code",[e._v("ith")]),e._v(" element is: "),a("code",[e._v("a_i=min_relay_fee * (1+percentage_increment)^(i+1)")])]),e._v(" "),a("p",[e._v("For instance, choosing the mempool buckets array to have parameters "),a("code",[e._v("percentage_increment = 50%")]),e._v(" and "),a("code",[e._v("array_max = 500.0 sat/vbytes")]),e._v(" the buckets would be constructed like so:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("bucket")]),e._v(" "),a("th",[e._v("bucket min fee rate")]),e._v(" "),a("th",[e._v("bucket max fee rate")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("a_0")]),e._v(" "),a("td",[e._v("1.0")]),e._v(" "),a("td",[e._v("1.5")])]),e._v(" "),a("tr",[a("td",[e._v("a_1")]),e._v(" "),a("td",[e._v("1.5")]),e._v(" "),a("td",[e._v("2.25")])]),e._v(" "),a("tr",[a("td",[e._v("a_2")]),e._v(" "),a("td",[e._v("2.25")]),e._v(" "),a("td",[e._v("3.375")])]),e._v(" "),a("tr",[a("td",[e._v("a_15")]),e._v(" "),a("td",[e._v("437.89")]),e._v(" "),a("td",[e._v("inf")])])])]),e._v(" "),a("p",[e._v("The array stops at "),a("code",[e._v("a15")]),e._v(" because "),a("code",[e._v("a16")]),e._v(" would have a bucket min greater than "),a("code",[e._v("array_max")]),e._v(".")]),e._v(" "),a("p",[e._v("The model is for light-client such as "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("neutrino"),a("OutboundLink")],1),e._v(" based ones. In these clients the mempool is already available (it's needed to check for received transactions) but we can't compute fee rates of this transactions because previous confirmed inputs are not in the mempool!")]),e._v(" "),a("p",[e._v("Luckily, "),a("strong",[e._v("thanks to temporal locality "),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(", an important part of mempool transactions spend outputs created very recently")]),e._v(", for example in the last 6 blocks.\nThe blocks are available through the p2p network, and downloading the last 6 is considered a good compromise between resource consumption and accurate prediction. We need the model to be built with the same data available in the prediction phase, as a consequence "),a("em",[e._v("the mempool data in the dataset refers only to transactions having their inputs in the last 6 blocks")]),e._v(". However the "),a("code",[e._v("bitcoin-csv")]),e._v(" tool inside the "),a("a",{attrs:{href:"https://github.com/RCasatta/bitcoin_logger",target:"_blank",rel:"noopener noreferrer"}},[e._v("data logger"),a("OutboundLink")],1),e._v(" allows to configure this parameter.")]),e._v(" "),a("h4",{attrs:{id:"the-outliers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-outliers"}},[e._v("#")]),e._v(" The outliers")]),e._v(" "),a("p",[e._v("The dataset also contains the block percentile fee rate "),a("code",[e._v("q_k")]),e._v(", considering "),a("code",[e._v("r_i")]),e._v(" to be the rate of the "),a("code",[e._v("ith")]),e._v(" transaction in a block, "),a("code",[e._v("q_k")]),e._v(" is the fee rate value such that for each transaction in a block "),a("code",[e._v("r_i")]),e._v(" < "),a("code",[e._v("q_k")]),e._v(" returns the "),a("code",[e._v("k%")]),e._v(" transactions in the block that are paying lower fees.")]),e._v(" "),a("p",[e._v("Percentiles are not used to feed the model but to filter some outliers tx.\nRemoving this observations is controversial at best and considered cheating at worse. However, it should be considered that Bitcoin Core "),a("code",[e._v("estimatesmartfee")]),e._v(" doesn't even bother to give estimation for the next block, we think this is due to the fact that many transactions that are confirming in the next block are huge overestimation, or clearly errors like "),a("a",{attrs:{href:"https://blockstream.info/tx/33291156ab79e9b4a1019b618b0acfa18cbdf8fa6b71c43a9eed62a849b86f9a",target:"_blank",rel:"noopener noreferrer"}},[e._v("this one"),a("OutboundLink")],1),e._v(" we found when we started logging data.\nThese outliers are several for transactions confirming in the next block ("),a("code",[e._v("confirms_in=1")]),e._v("), less so for "),a("code",[e._v("confirms_in=2")]),e._v(", mostly disappeared for "),a("code",[e._v("confirms_in=3")]),e._v(" or more. It's counterintuitive that overestimation exists for "),a("code",[e._v("confirms_in>1")]),e._v(", by definition an overestimation is a fee rate way higher than needed, so how is possible that an overestimation doesn't enter the very next block? There are a couple of reasons why a block is discovered without containing a transaction with high fee rate:")]),e._v(" "),a("ul",[a("li",[e._v("network latency: my node saw the transaction but the miner didn't see that transaction yet,")]),e._v(" "),a("li",[e._v("block building latency: the miner saw the transaction, but didn't finish to rebuild the block template or decided it's more efficient to finish a cycle on the older block template.")])]),e._v(" "),a("p",[e._v("To keep the model balanced, when overestimation is filtered out, underestimation are filtered out as well. This also has the effect to remove some of the transactions possibly included because a fee is payed out-of-band.\nAnother reason to filter transactions is that the dataset is over-represented by transactions with low "),a("code",[e._v("confirms_in")]),e._v(": more than 50% of transactions get confirmed in the next block, so we think it's good to filter some of these transactions.")]),e._v(" "),a("p",[e._v("The applied filters are the following:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("confirms_in")]),e._v(" "),a("th",[e._v("lower")]),e._v(" "),a("th",[e._v("higher")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("q45")]),e._v(" "),a("td",[e._v("q55")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("q30")]),e._v(" "),a("td",[e._v("q70")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("q1")]),e._v(" "),a("td",[e._v("q99")])])])]),e._v(" "),a("p",[e._v("Not yet convinced by the removal of these outliers? The "),a("a",{attrs:{href:"https://storage.googleapis.com/bitcoin_log/dataset_18.csv.gz",target:"_blank",rel:"noopener noreferrer"}},[e._v("dataset"),a("OutboundLink")],1),e._v(" contains all the observations, make your model 😃")]),e._v(" "),a("h4",{attrs:{id:"recap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recap"}},[e._v("#")]),e._v(" Recap")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("column")]),e._v(" "),a("th",[e._v("used in the model")]),e._v(" "),a("th",[e._v("description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("txid")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("Transaction hash, useful for debugging")])]),e._v(" "),a("tr",[a("td",[e._v("timestamp")]),e._v(" "),a("td",[e._v("converted")]),e._v(" "),a("td",[e._v("The time when the transaction has been added in the mempool, in the model is used in the form "),a("code",[e._v("day_of_week")]),e._v(" and "),a("code",[e._v("hour")])])]),e._v(" "),a("tr",[a("td",[e._v("current_height")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("The blockchain height seen by the node in this moment")])]),e._v(" "),a("tr",[a("td",[e._v("confirms_in")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("This transaction confirmed at block height "),a("code",[e._v("current_height+confirms_in")])])]),e._v(" "),a("tr",[a("td",[e._v("fee_rate")]),e._v(" "),a("td",[e._v("target")]),e._v(" "),a("td",[e._v("This transaction fee rate measured in "),a("code",[e._v("[sat/vbytes]")])])]),e._v(" "),a("tr",[a("td",[e._v("fee_rate_bytes")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("fee rate in satoshi / bytes, used to check Bitcoin Core "),a("code",[e._v("estimatesmartfee")]),e._v(" predictions")])]),e._v(" "),a("tr",[a("td",[e._v("block_avg_fee")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("block average fee rate "),a("code",[e._v("[sat/vbytes]")]),e._v(" of block "),a("code",[e._v("current_height+confirms_in")])])]),e._v(" "),a("tr",[a("td",[e._v("core_econ")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("bitcoin "),a("code",[e._v("estimatesmartfee")]),e._v(" result for "),a("code",[e._v("confirms_in")]),e._v(" block target and in economic mode. Could be not available "),a("code",[e._v("?")]),e._v(" when a block is connected more recently than the estimation has been requested, estimation are requested every 10 secs.")])]),e._v(" "),a("tr",[a("td",[e._v("core_cons")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("Same as above but with conservative mode")])]),e._v(" "),a("tr",[a("td",[e._v("mempool_len")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("Sum of the mempool transactions with fee rate available (sum of every "),a("code",[e._v("a*")]),e._v(" field)")])]),e._v(" "),a("tr",[a("td",[e._v("parent_in_cpfp")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("It's 1 when the transaction has outputs that are spent in the same block in which the transaction is confirmed (they are parent in a CPFP relations).")])]),e._v(" "),a("tr",[a("td",[e._v("q1-q30-...")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("Transaction confirming fast could be outliers, usually paying a lot more than required, this percentiles are used to filter those transactions,")])]),e._v(" "),a("tr",[a("td",[e._v("a1-a2-...")]),e._v(" "),a("td",[e._v("yes")]),e._v(" "),a("td",[e._v("Contains the number of transaction in the mempool with known fee rate in the ith bucket.")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/fee-estimation-for-light-clients/the-good-the-bad-the-ugly.jpg",alt:"The good, the bad and the ugly"}})]),a("div",{attrs:{align:"center"}},[e._v('My biological neural network fired this, I think it\'s because a lot of chapters start with "The"')]),e._v(" "),a("br"),a("br"),a("p"),e._v(" "),a("p",[e._v("In the previous "),a("RouterLink",{attrs:{to:"/blog/2021/01/fee-estimation-for-light-clients-part-1/"}},[e._v("Part 1")]),e._v(" we talked about the problem.")],1),e._v(" "),a("p",[e._v("In the following "),a("RouterLink",{attrs:{to:"/blog/2021/01/fee-estimation-for-light-clients-part-3/"}},[e._v("Part 3")]),e._v(" we are going to talk about the model.")],1),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("In computer science temporal locality refers to the tendency to access recent data more often than older data. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);