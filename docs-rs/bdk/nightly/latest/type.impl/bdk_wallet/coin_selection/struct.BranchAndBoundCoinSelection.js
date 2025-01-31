(function() {
    var type_impls = Object.fromEntries([["bdk_wallet",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BranchAndBoundCoinSelection%3CCs%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_wallet/wallet/coin_selection.rs.html#430-438\">Source</a><a href=\"#impl-BranchAndBoundCoinSelection%3CCs%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Cs&gt; <a class=\"struct\" href=\"bdk_wallet/coin_selection/struct.BranchAndBoundCoinSelection.html\" title=\"struct bdk_wallet::coin_selection::BranchAndBoundCoinSelection\">BranchAndBoundCoinSelection</a>&lt;Cs&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_wallet/wallet/coin_selection.rs.html#432-437\">Source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_wallet/coin_selection/struct.BranchAndBoundCoinSelection.html#tymethod.new\" class=\"fn\">new</a>(size_of_change: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, fallback_algorithm: Cs) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create new instance with a target <code>size_of_change</code> and <code>fallback_algorithm</code>.</p>\n</div></details></div></details>",0,"bdk_wallet::wallet::coin_selection::DefaultCoinSelectionAlgorithm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-BranchAndBoundCoinSelection%3CCs%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_wallet/wallet/coin_selection.rs.html#403\">Source</a><a href=\"#impl-Clone-for-BranchAndBoundCoinSelection%3CCs%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Cs: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"bdk_wallet/coin_selection/struct.BranchAndBoundCoinSelection.html\" title=\"struct bdk_wallet::coin_selection::BranchAndBoundCoinSelection\">BranchAndBoundCoinSelection</a>&lt;Cs&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_wallet/wallet/coin_selection.rs.html#403\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"bdk_wallet/coin_selection/struct.BranchAndBoundCoinSelection.html\" title=\"struct bdk_wallet::coin_selection::BranchAndBoundCoinSelection\">BranchAndBoundCoinSelection</a>&lt;Cs&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bdk_wallet::wallet::coin_selection::DefaultCoinSelectionAlgorithm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CoinSelectionAlgorithm-for-BranchAndBoundCoinSelection%3CCs%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_wallet/wallet/coin_selection.rs.html#442-551\">Source</a><a href=\"#impl-CoinSelectionAlgorithm-for-BranchAndBoundCoinSelection%3CCs%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Cs: <a class=\"trait\" href=\"bdk_wallet/coin_selection/trait.CoinSelectionAlgorithm.html\" title=\"trait bdk_wallet::coin_selection::CoinSelectionAlgorithm\">CoinSelectionAlgorithm</a>&gt; <a class=\"trait\" href=\"bdk_wallet/coin_selection/trait.CoinSelectionAlgorithm.html\" title=\"trait bdk_wallet::coin_selection::CoinSelectionAlgorithm\">CoinSelectionAlgorithm</a> for <a class=\"struct\" href=\"bdk_wallet/coin_selection/struct.BranchAndBoundCoinSelection.html\" title=\"struct bdk_wallet::coin_selection::BranchAndBoundCoinSelection\">BranchAndBoundCoinSelection</a>&lt;Cs&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.coin_select\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_wallet/wallet/coin_selection.rs.html#443-550\">Source</a><a href=\"#method.coin_select\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_wallet/coin_selection/trait.CoinSelectionAlgorithm.html#tymethod.coin_select\" class=\"fn\">coin_select</a>&lt;R: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>&gt;(\n    &amp;self,\n    required_utxos: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"bdk_wallet/struct.WeightedUtxo.html\" title=\"struct bdk_wallet::WeightedUtxo\">WeightedUtxo</a>&gt;,\n    optional_utxos: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"bdk_wallet/struct.WeightedUtxo.html\" title=\"struct bdk_wallet::WeightedUtxo\">WeightedUtxo</a>&gt;,\n    fee_rate: FeeRate,\n    target_amount: Amount,\n    drain_script: &amp;Script,\n    rand: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut R</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"bdk_wallet/coin_selection/struct.CoinSelectionResult.html\" title=\"struct bdk_wallet::coin_selection::CoinSelectionResult\">CoinSelectionResult</a>, <a class=\"struct\" href=\"bdk_wallet/coin_selection/struct.InsufficientFunds.html\" title=\"struct bdk_wallet::coin_selection::InsufficientFunds\">InsufficientFunds</a>&gt;</h4></section></summary><div class='docblock'>Perform the coin selection <a href=\"bdk_wallet/coin_selection/trait.CoinSelectionAlgorithm.html#tymethod.coin_select\">Read more</a></div></details></div></details>","CoinSelectionAlgorithm","bdk_wallet::wallet::coin_selection::DefaultCoinSelectionAlgorithm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-BranchAndBoundCoinSelection%3CCs%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_wallet/wallet/coin_selection.rs.html#403\">Source</a><a href=\"#impl-Debug-for-BranchAndBoundCoinSelection%3CCs%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Cs: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"bdk_wallet/coin_selection/struct.BranchAndBoundCoinSelection.html\" title=\"struct bdk_wallet::coin_selection::BranchAndBoundCoinSelection\">BranchAndBoundCoinSelection</a>&lt;Cs&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_wallet/wallet/coin_selection.rs.html#403\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","bdk_wallet::wallet::coin_selection::DefaultCoinSelectionAlgorithm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-BranchAndBoundCoinSelection%3CCs%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_wallet/wallet/coin_selection.rs.html#420-428\">Source</a><a href=\"#impl-Default-for-BranchAndBoundCoinSelection%3CCs%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Cs: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bdk_wallet/coin_selection/struct.BranchAndBoundCoinSelection.html\" title=\"struct bdk_wallet::coin_selection::BranchAndBoundCoinSelection\">BranchAndBoundCoinSelection</a>&lt;Cs&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_wallet/wallet/coin_selection.rs.html#421-427\">Source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","bdk_wallet::wallet::coin_selection::DefaultCoinSelectionAlgorithm"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10736]}