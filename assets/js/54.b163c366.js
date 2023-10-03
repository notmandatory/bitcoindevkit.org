(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{399:function(t,e,a){"use strict";a.r(e);var s=a(7),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"tutorial-goals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-goals"}},[t._v("#")]),t._v(" Tutorial Goals")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("The goal for this tutorial is to introduce you to "),e("a",{attrs:{href:"https://github.com/bitcoindevkit/bdk-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("bdk-cli"),e("OutboundLink")],1),t._v(", a powerful command-line program. You will be exposed to many of the basic skills that go into creating and managing bitcoin wallets.")])]),t._v(" "),e("li",[e("p",[t._v("If you've read most of the "),e("a",{attrs:{href:"https://github.com/bitcoinbook/bitcoinbook",target:"_blank",rel:"noopener noreferrer"}},[t._v('"Mastering Bitcoin"'),e("OutboundLink")],1),t._v(" book, this tutorial could serve as a stepping stone into your Bitcoin wallet development journey.")])]),t._v(" "),e("li",[e("p",[t._v("This short tutorial will expose you to the "),e("a",{attrs:{href:"https://docs.rs/bdk/latest/bdk/",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("bdk library")]),t._v(" "),e("OutboundLink")],1),t._v(" and the practical knowledge needed for bitcoin wallet development. As a consequence you will deepen your technical understanding about bitcoin and the bdk library.")])]),t._v(" "),e("li",[e("p",[t._v("BDK also has "),e("a",{attrs:{href:"https://github.com/bitcoindevkit/bdk-ffi",target:"_blank",rel:"noopener noreferrer"}},[t._v("language-bindings"),e("OutboundLink")],1),t._v(" for "),e("strong",[t._v("Kotlin/Java, Swift, Python")]),t._v(" which enable the use of BDK's "),e("strong",[t._v("Rust")]),t._v(" library as an API. You can later use these similar steps to create your own bitcoin mobile, desktop or even WebApp by using the bdk-ffi language bindings.")])])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"a-few-things-before-you-begin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-few-things-before-you-begin"}},[t._v("#")]),t._v(" A few things before you begin:")]),t._v(" "),e("ul",[e("li",[t._v("Three things to look out for in each step of the tutorial:\n"),e("ul",[e("li",[e("ol",[e("li",[t._v("▶️ / 🔶 - Commands for the Terminal or Shell")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[t._v("👍 - Preview of the command output. Note, not all commands will output code.")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"3"}},[e("li",[t._v("Preview Video of the tutorial for reference of what things should look like in action.")])])])])])]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"outline-of-tutorial-and-installation-notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outline-of-tutorial-and-installation-notes"}},[t._v("#")]),t._v(" Outline of Tutorial and Installation notes:")]),t._v(" "),e("h3",{attrs:{id:"brief-outline-of-tutorial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#brief-outline-of-tutorial"}},[t._v("#")]),t._v(" Brief Outline of Tutorial")]),t._v(" "),e("ul",[e("li",[t._v("Step 1: Creating a mnemonic word list + XPRV (Extended Private Key)")]),t._v(" "),e("li",[t._v("Step 2: Generate testnet Receive Address")]),t._v(" "),e("li",[t._v("Step 3: Send funds to newly generated address")]),t._v(" "),e("li",[t._v("Step 4: Sync Wallet")]),t._v(" "),e("li",[t._v("Step 5: Check Balance of Wallet")]),t._v(" "),e("li",[t._v("Step 6: Create a Transaction (PSBT)")]),t._v(" "),e("li",[t._v("Step 7: Sign the Transaction (PSBT)")]),t._v(" "),e("li",[t._v("Step 8: Broadcast Transaction")])]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"rust-and-cargo-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rust-and-cargo-installation"}},[t._v("#")]),t._v(" Rust and Cargo installation:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust and Cargo Installation"),e("OutboundLink")],1)])]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"bdk-cli-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bdk-cli-installation"}},[t._v("#")]),t._v(" "),e("code",[t._v("bdk-cli")]),t._v(" installation:")]),t._v(" "),e("ul",[e("li",[t._v("Download the "),e("a",{attrs:{href:"https://github.com/bitcoindevkit/bdk-cli.git",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("bdk-cli")]),t._v(" github repository locally"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Enter the folder "),e("code",[t._v("cd bdk-cli")])]),t._v(" "),e("li",[t._v("Install "),e("code",[t._v("cargo install --path . --features electrum,repl,compiler")])]),t._v(" "),e("li",[t._v("Once installation is done exit and reopen your terminal (command-line interface)")])])])]),t._v(" "),e("h3",{attrs:{id:"emoji-legend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emoji-legend"}},[t._v("#")]),t._v(" Emoji Legend:")]),t._v(" "),e("p",[t._v("▶️ : Unix/Linux Commands to copied and pasted\n🔶 : Windows Powershell Commands to copied and pasted\n👍 : Output/ preview of code")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"step-0-check-version-of-bdk-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-0-check-version-of-bdk-cli"}},[t._v("#")]),t._v(" Step 0: Check Version of bdk-cli")]),t._v(" "),e("p",[t._v("▶️ / 🔶  "),e("code",[t._v("bdk-cli -V")]),t._v("\n👍 The output below confirms the command was successful.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bdk-cli 0.6.0\n")])])]),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/IcuyeMS.gif",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"preview-of-bdk-cli-help-menu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preview-of-bdk-cli-help-menu"}},[t._v("#")]),t._v(" Preview of bdk-cli help menu")]),t._v(" "),e("p",[t._v("▶️ / 🔶  "),e("code",[t._v("bdk-cli --help")]),e("br"),t._v("\n👍 The output below confirms the command was successful.")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("The BDK Command Line Wallet App\n\nbdk-cli is a light weight "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" line bitcoin wallet, powered by BDK. This app can be used as a playground as well as\ntesting environment to simulate various wallet testing situations. If you are planning to use BDK "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" your wallet, bdk-\ncli is also a great intro tool to get familiar with the BDK API.\n\nBut this is not just any toy. bdk-cli is also a fully functioning bitcoin wallet with taproot support"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\nFor "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information checkout "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://bitcoindevkit.org/"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\nUSAGE:\n    bdk-cli "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SUBCOMMAND"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\nFLAGS:\n    -h, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("       Prints "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" information\n    -V, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("    Prints version information\n\nOPTIONS:\n    -d, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--datadir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DATADIR"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    Sets the wallet data directory. Default value "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(' "~/.bdk-bitcoin\n    -n, '),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--network")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NETWORK"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    Sets the network "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: testnet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("possible values: bitcoin, testnet, signet, regtest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nSUBCOMMANDS:\n    compile    Compile a miniscript policy to an output descriptor\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("       Prints this message or the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" of the given subcommand"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    key        Subcommands "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Key operations\n    repl       Options to configure a SOCKS5 proxy "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a blockchain client connection\n    wallet     Wallet subcommands that can be issued without a blockchain backend\n")])])]),e("hr"),t._v(" "),e("h2",{attrs:{id:"step-1-seed-generate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-seed-generate"}},[t._v("#")]),t._v(" Step 1: Seed Generate")]),t._v(" "),e("h3",{attrs:{id:"1a-mnemonic-word-list-xprv-extended-private-key-"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#1a-mnemonic-word-list-xprv-extended-private-key-"}},[t._v("#")]),t._v(" 1a: Mnemonic word-list + XPRV (Extended Private Key) 🔑")]),t._v(" "),e("p",[t._v("Linux/Terminal:\n▶️   "),e("code",[t._v("bdk-cli key generate | tee key.json")])]),t._v(" "),e("p",[t._v("Windows Powershell:\n🔶 "),e("code",[t._v('bdk-cli key generate | Out-File -FilePath "key.json"')])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fingerprint"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"42b15d2f"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mnemonic"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"party salon worth satoshi envelope suggest garlic dry add pitch throw clap keen narrow antique oyster ketchup purchase gasp visual work venue fog crater"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xprv"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tprv8ZgxMBicQKsPdwpamtjqMFpYRTafnE1bN2SphLEybCtRKakk6S1TgQCsZgiBwJuJNWe3jYdgVCTsKf9weMxj6tW4zNNKWptykszJpS2L8wE"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/ii62Hul.gif",alt:""}})]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"1b-save-xprv-extended-private-key-into-environment-variable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#1b-save-xprv-extended-private-key-into-environment-variable"}},[t._v("#")]),t._v(" 1b: Save XPRV (Extended Private Key) into environment variable")]),t._v(" "),e("p",[t._v("Linux/Terminal:\n▶️   "),e("code",[t._v("export XPRV_00=$(cat key.json | jq -r .xprv)")])]),t._v(" "),e("p",[t._v("Windows Powershell:")]),t._v(" "),e("p",[t._v("🔶 "),e("code",[t._v("$json = Get-Content -Path .\\key.json | ConvertFrom-Json")])]),t._v(" "),e("p",[t._v("🔶 "),e("code",[t._v("$mykeyValue = $json.xprv")])]),t._v(" "),e("p",[t._v("🔶 "),e("code",[t._v("[System.Environment]::SetEnvironmentVariable('XPRV',$mykeyValue, 'Process')")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/KYW2Cdo.gif",alt:""}})]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"1c-verify-environment-variable-xprv-00-is-active"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#1c-verify-environment-variable-xprv-00-is-active"}},[t._v("#")]),t._v(" 1c: Verify environment variable XPRV_00 is active")]),t._v(" "),e("p",[t._v("Linux/Terminal:\n▶️   "),e("code",[t._v("env | grep XPRV")])]),t._v(" "),e("p",[t._v("Windows Powershell:\n🔶 "),e("code",[t._v("$env:XPRV")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/ZahbJwe.gif",alt:""}})]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"1d-create-descriptor-and-save-into-environment-variable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#1d-create-descriptor-and-save-into-environment-variable"}},[t._v("#")]),t._v(" 1d: Create Descriptor and Save into environment variable")]),t._v(" "),e("p",[t._v("Linux/Terminal:\n▶️   "),e("code",[t._v('export my_descriptor="wpkh($XPRV_00/84h/1h/0h/0/*)"')])]),t._v(" "),e("p",[t._v("Windows Powershell:\n🔶 "),e("code",[t._v("[System.Environment]::SetEnvironmentVariable('my_descriptor', \"wpkh($env:XPRV/84h/1h/0h/0/*)\", 'Process')")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/UV4Vgsq.gif",alt:""}})]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"1e-verify-environment-variable-my-descriptor-is-active"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#1e-verify-environment-variable-my-descriptor-is-active"}},[t._v("#")]),t._v(" 1e: Verify environment variable my_descriptor is active")]),t._v(" "),e("p",[t._v("Linux/Terminal:\n▶️ "),e("code",[t._v("env | grep my_descriptor")])]),t._v(" "),e("p",[t._v("Windows Powershell:\n🔶 "),e("code",[t._v("$env:my_descriptor")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/s7ZeRQN.gif",alt:""}})]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"step-2-generate-receive-address"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-generate-receive-address"}},[t._v("#")]),t._v(" Step 2: Generate Receive-Address")]),t._v(" "),e("p",[t._v("Linux/Terminal:")]),t._v(" "),e("p",[t._v("▶️  "),e("code",[t._v("bdk-cli wallet --wallet wallet_name --descriptor $my_descriptor get_new_address")])]),t._v(" "),e("p",[t._v("Windows Powershell:\n🔶"),e("code",[t._v("bdk-cli wallet --descriptor $env:my_descriptor get_new_address")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/P8PjTAo.gif",alt:""}})]),t._v(" "),e("p",[t._v("👍 The output below confirms the command was successful.")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tb1qrh4sq5va0unqtxyfv8al9lz3sna3988cj59uya"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("hr"),t._v(" "),e("h2",{attrs:{id:"step-3-send-testnet-bitcoin-to-the-newly-created-receive-address"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-send-testnet-bitcoin-to-the-newly-created-receive-address"}},[t._v("#")]),t._v(" Step 3: Send testnet bitcoin to the newly created receive-address")]),t._v(" "),e("p",[t._v("Use a faucet to send funds to your newly created address. Here is a link to one: "),e("a",{attrs:{href:"https://bitcoinfaucet.uo1.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bitcoin Testnet Faucet"),e("OutboundLink")],1)]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"step-4-sync-the-wallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-4-sync-the-wallet"}},[t._v("#")]),t._v(" Step 4: Sync the wallet")]),t._v(" "),e("p",[t._v("Linux/Terminal:\n▶️ "),e("code",[t._v("bdk-cli wallet --wallet wallet_name --descriptor $my_descriptor sync")])]),t._v(" "),e("p",[t._v("Windows Powershell:\n🔶 "),e("code",[t._v("bdk-cli wallet --descriptor $env:my_descriptor sync")])]),t._v(" "),e("p",[t._v("👍 The output below confirms the command was successful.")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/WFYBgVB.gif",alt:""}})]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"step-5-check-the-balance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-5-check-the-balance"}},[t._v("#")]),t._v(" Step 5: Check the balance")]),t._v(" "),e("p",[t._v("Linux/Terminal:\n▶️ "),e("code",[t._v("bdk-cli wallet --wallet wallet_name --descriptor $my_descriptor get_balance")])]),t._v(" "),e("p",[t._v("Windows Powershell:\n🔶\n"),e("code",[t._v("bdk-cli wallet --descriptor $env:my_descriptor get_balance")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Note: The balance will only show after the transaction has been confirmed in a block at least once.")])]),t._v(" "),e("p",[t._v("👍 The output below confirms the command was successful:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"satoshi"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"confirmed"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"immature"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trusted_pending"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"untrusted_pending"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/v8MAYB2.gif",alt:""}})]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"step-6-create-transaction-psbt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-6-create-transaction-psbt"}},[t._v("#")]),t._v(" Step 6: Create Transaction (PSBT)")]),t._v(" "),e("p",[t._v("To create a PSBT (partially-signed-bitcoin-transaction) run  the command:")]),t._v(" "),e("p",[t._v("Linux/Terminal:\n▶️ "),e("code",[t._v("bdk-cli wallet --wallet wallet_name --descriptor $my_descriptor create_tx --to tb1qw2c3lxufxqe2x9s4rdzh65tpf4d7fssjgh8nv6:50000")])]),t._v(" "),e("p",[t._v("Windows Powershell:\n🔶\n"),e("code",[t._v("bdk-cli wallet --descriptor $env:my_descriptor create_tx --to tb1qjk6n943uwhqhdf7en600tnwxpslvwtr0udsehp:0 --send_all")]),t._v(" "),e("img",{attrs:{src:"https://i.imgur.com/EUCovcJ.gif",alt:""}})]),t._v(" "),e("p",[t._v("👍 The output below confirms the command was successful.")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"details"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"confirmation_time"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" null,\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fee"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("113")]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"received"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sent"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123000")]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transaction"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" null,\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"txid"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"029173d76253e3441f9dc26f91e6ef30dff486848e91a7941f0cacd0af25ee30"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"psbt"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cHNidP8BAFUBAAAAAak8uMR3UGkAGUKWsq8Mv45qg2fdD93JQRIsa2P0wFloAQAAAAD/////AQfgAQAAAAAAGXapFDRKD0jKFQ7CuQOBdmC5tosTpnAmiKwAAAAAAAEA3gIAAAAAAQFY9sVfEEbyjrHXSlxXDxL+71WOMnsPpVElwk+3E/J9vAAAAAAA/v///wIYZRIAAAAAABYAFBKYf7yF+ss6EFdw2rDZTfdLhep8eOABAAAAAAAWABQd6wBRnX8mBZiJYfvy/FGE+xKc+AJHMEQCIFSIkvEUI9yUgEw4JocRs1aiVsBlKKXrOQaQb3XFqR21AiBqiEVzCVVSRGjckyPDgAQBnOdSzBYR6Rw6KFcCP+E27wEhAwIlXdfM2WYnYa36Hp4MS6YkplBAgBsb1tYG9NiWFWTKzPYhAAEBH3jgAQAAAAAAFgAUHesAUZ1/JgWYiWH78vxRhPsSnPgiBgP80FpaWYQzGzCnNI9blXbei61YpAmtoezMRxpVvBJ6SxgTizKsVAAAgAEAAIAAAACAAAAAAAAAAAAAAA=="')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("hr"),t._v(" "),e("h3",{attrs:{id:"6a-export-psbt-to-environment-variable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#6a-export-psbt-to-environment-variable"}},[t._v("#")]),t._v(" 6a: export PSBT to environment-variable")]),t._v(" "),e("p",[t._v("Linux/Terminal:\n▶️ "),e("code",[t._v('export PSBT="PASTE_PSBT_HERE"')])]),t._v(" "),e("p",[t._v("Windows Powershell:\n🔶"),e("code",[t._v("[System.Environment]::SetEnvironmentVariable('PSBT',\"PASTE_PSBT_HERE\",'Process')")]),t._v(" "),e("img",{attrs:{src:"https://i.imgur.com/CEDKcPZ.gif",alt:""}})]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"step-7-sign-transaction-psbt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-7-sign-transaction-psbt"}},[t._v("#")]),t._v(" Step 7: Sign Transaction (PSBT)")]),t._v(" "),e("p",[t._v("Linux/Terminal:\n▶️ "),e("code",[t._v("bdk-cli wallet --wallet wallet_name --descriptor $my_descriptor sign --psbt $PSBT")])]),t._v(" "),e("p",[t._v("Windows Powershell:\n🔶"),e("code",[t._v("bdk-cli wallet --descriptor $env:my_descriptor sign --psbt $env:PSBT")])]),t._v(" "),e("ul",[e("li",[t._v("DON'T FORGET to COPY the PSBT for the next step")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/f4o4Ce8.gif",alt:""}})]),t._v(" "),e("p",[t._v("👍 The output below confirms the command was successful.")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"is_finalized"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" true,\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"psbt"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cHNidP8BAFUBAAAAAak8uMR3UGkAGUKWsq8Mv45qg2fdD93JQRIsa2P0wFloAQAAAAD/////AQfgAQAAAAAAGXapFDRKD0jKFQ7CuQOBdmC5tosTpnAmiKwAAAAAAAEA3gIAAAAAAQFY9sVfEEbyjrHXSlxXDxL+71WOMnsPpVElwk+3E/J9vAAAAAAA/v///wIYZRIAAAAAABYAFBKYf7yF+ss6EFdw2rDZTfdLhep8eOABAAAAAAAWABQd6wBRnX8mBZiJYfvy/FGE+xKc+AJHMEQCIFSIkvEUI9yUgEw4JocRs1aiVsBlKKXrOQaQb3XFqR21AiBqiEVzCVVSRGjckyPDgAQBnOdSzBYR6Rw6KFcCP+E27wEhAwIlXdfM2WYnYa36Hp4MS6YkplBAgBsb1tYG9NiWFWTKzPYhAAEBH3jgAQAAAAAAFgAUHesAUZ1/JgWYiWH78vxRhPsSnPgiAgP80FpaWYQzGzCnNI9blXbei61YpAmtoezMRxpVvBJ6S0gwRQIhALWkBRSJzxuf0od4tPu3qFmEfJ2Y+/QBGtfjSFObWsPeAiA4QJx8Rk5pacrjHv5EOdw6RNHXcdtepFs+m0/Za/h0UQEiBgP80FpaWYQzGzCnNI9blXbei61YpAmtoezMRxpVvBJ6SxgTizKsVAAAgAEAAIAAAACAAAAAAAAAAAABBwABCGwCSDBFAiEAtaQFFInPG5/Sh3i0+7eoWYR8nZj79AEa1+NIU5taw94CIDhAnHxGTmlpyuMe/kQ53DpE0ddx216kWz6bT9lr+HRRASED/NBaWlmEMxswpzSPW5V23outWKQJraHszEcaVbwSeksAAA=="')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("hr"),t._v(" "),e("h3",{attrs:{id:"7a-export-signed-psbt-to-environment-variable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#7a-export-signed-psbt-to-environment-variable"}},[t._v("#")]),t._v(" 7a: export signed psbt to environment variable")]),t._v(" "),e("p",[t._v("Linux/Terminal:\n▶️ "),e("code",[t._v('export SIGNED_PSBT="Paste_PSBT_HERE"')])]),t._v(" "),e("p",[t._v("Windows Powershell:\n🔶\n"),e("code",[t._v('$env:PSBTSIGNED = "STRINGHERE"')]),t._v(" "),e("img",{attrs:{src:"https://i.imgur.com/VJsl8zR.gif",alt:""}})]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"step-8-broadcast-transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-8-broadcast-transaction"}},[t._v("#")]),t._v(" Step 8: Broadcast Transaction")]),t._v(" "),e("p",[t._v("Linux/Terminal:\n▶️  "),e("code",[t._v("bdk-cli wallet --wallet wallet_name --descriptor $my_descriptor broadcast --psbt $SIGNED_PSBT")])]),t._v(" "),e("p",[t._v("Windows Powershell:\n🔶\n"),e("code",[t._v("bdk-cli wallet --descriptor $env:my_descriptor broadcast --psbt $env:PSBTSIGNED")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/yQZZk0d.gif",alt:""}})]),t._v(" "),e("p",[t._v("👍 The output below confirms the command was successful.")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"txid"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a0877b7ce91ea6d141ba63277673f5bdf0edfdd45f91a39ba1a1ace15f839b52"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("Verify transaction in the memory pool on testnet "),e("a",{attrs:{href:"https://mempool.space/testnet",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mempool-testnet!"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Run sync one more time and see that the balance has decreased.")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"resources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP-32:  Hierarchical Deterministic Wallets"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP: 39 - Mnemonic code for generating deterministic keys"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP: 44 - Multi-Account Hierarchy for Deterministic Wallets"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP: 84 - Derivation scheme for P2WPKH based accounts"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP: 174 - Partially Signed Bitcoin Transaction Format"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.summerofbitcoin.org/miniscript-policy-descriptors-hidden-powers-of-bitcoin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("What are Descriptors and miniscript?"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://bitcoin.stackexchange.com/questions/97242/bip39-tool-bip32-extended-private-key-vs-bip32-root-key",target:"_blank",rel:"noopener noreferrer"}},[t._v("Master Private  Key and Extended Private Key"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://min.sc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minsc A Miniscript-based scripting language for Bitcoin contracts"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);