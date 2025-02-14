# 1.0.0 (2025-01-25)


### Bug Fixes

* adjust gap spacing in asset list items on AddressPage ([8643218](https://github.com/serendipity-seeker/explorer-frontend/commit/8643218fd3336b1284904daa1b2eb13f75e5729f))
* adjust layout in Error404Page to improve responsiveness ([5515a22](https://github.com/serendipity-seeker/explorer-frontend/commit/5515a222c164695554d90ed3cc2093d79c98619d))
* conditionally display asset transfer warning ([63a18d4](https://github.com/serendipity-seeker/explorer-frontend/commit/63a18d474ae344e9b00ac62e09f36140963a50b9))
* correct typo in ticksLoadFailed message in network-page localization ([d9bf5e4](https://github.com/serendipity-seeker/explorer-frontend/commit/d9bf5e462a61711b6b018c6d3c940c4401f6894c))
* **env:** add VITE_QUBIC_API_URL to example environment file ([3795c49](https://github.com/serendipity-seeker/explorer-frontend/commit/3795c497484bc6dc21027611ff15c26c47c7b4ee))
* extend twMerge to support custom Tailwind scales and classes ([457d8c8](https://github.com/serendipity-seeker/explorer-frontend/commit/457d8c893669585145935b8fe039e508185f9c5e))
* **i18n:** update Chinese translation for 'tick' to '刻度' ([ed0f4b0](https://github.com/serendipity-seeker/explorer-frontend/commit/ed0f4b0617146c4d5f816a50c15c6cca480d0754))
* **i18n:** update chinese translations ([08c5dc1](https://github.com/serendipity-seeker/explorer-frontend/commit/08c5dc128cbb918835c58573f5d41b3312d5eee6))
* **i18n:** update Chinese translations for network page ([b9cff09](https://github.com/serendipity-seeker/explorer-frontend/commit/b9cff095d42a49d6c0e221d48ad53523c906c114))
* Implement handling for non executed txs ([693ab06](https://github.com/serendipity-seeker/explorer-frontend/commit/693ab0661e45312d298c3fb4659695fa3db4021b))
* prevent body scrolling when modal is open on desktop and mobile ([211b43b](https://github.com/serendipity-seeker/explorer-frontend/commit/211b43b7d4bbca1931caf5d80c35c897cf523562))
* remove old richlistpage ([78b95ff](https://github.com/serendipity-seeker/explorer-frontend/commit/78b95ff5c83adbf6236457e773d32ef534262e1e))
* remove unused exclamation-triangle icon SVG from assets ([2e49580](https://github.com/serendipity-seeker/explorer-frontend/commit/2e49580b10fbdcd69cbe7aa645b599c876533055))
* reorder class names for consistency and readability across components ([3799144](https://github.com/serendipity-seeker/explorer-frontend/commit/3799144371bedcb2494421277b243df287361c93))
* replace CirculatingCoinsIcon with FireIcon in OverviewPage ([fc372ba](https://github.com/serendipity-seeker/explorer-frontend/commit/fc372bad25d65c144bb20555256f0a5abed219ea))
* swap arrow icons in TxItem component for transaction direction ([ab19bdc](https://github.com/serendipity-seeker/explorer-frontend/commit/ab19bdc208def5efba19221e828697fad9729f02))
* update address display logic for asset transfers ([0618f7c](https://github.com/serendipity-seeker/explorer-frontend/commit/0618f7c483aa5ffcd9bc4dfd201d5ec37de65384))
* Update font weight ([39e4270](https://github.com/serendipity-seeker/explorer-frontend/commit/39e4270af0882c0cf7334be39551eb0610fefd54))
* update import path for GetLatestStatsResponse ([0d574b5](https://github.com/serendipity-seeker/explorer-frontend/commit/0d574b538cb9329b71988b597acc2e9ac426df5d))
* update input text size in SearchBar for improved readability ([19f46d6](https://github.com/serendipity-seeker/explorer-frontend/commit/19f46d6b58881b84339c392f66ddca6627da1eba))
* Update pnpm-lock.yaml ([ecde419](https://github.com/serendipity-seeker/explorer-frontend/commit/ecde4198cc9656d713139c1a0202cf018ea36ed7))
* update qubic-ts-library version to ^0.1.2 in pnpm-lock.yaml ([38602da](https://github.com/serendipity-seeker/explorer-frontend/commit/38602da38cdc834d60d5e9e5c70a68a6e8d81b40))
* update rank calculation to use dynamic page size ([9049ee2](https://github.com/serendipity-seeker/explorer-frontend/commit/9049ee22eb7ac0b8e9d07a5a31cb8ceb99eca1ed))
* Update resetState impl ([e395a17](https://github.com/serendipity-seeker/explorer-frontend/commit/e395a17a0b5b67b91cc211590f134fd1d4ae04fe))
* Use formatString on balance and align it to the right ([8961e0c](https://github.com/serendipity-seeker/explorer-frontend/commit/8961e0cbbe63517513c980e93dfcbf5a3d7d5fe0))


### Features

* add .eslintignore file to exclude build outputs, dependencies, and various config files ([b159e4b](https://github.com/serendipity-seeker/explorer-frontend/commit/b159e4b7df89aeb592e4f7c244cc8dc7889b0147))
* add .prettierignore file ([8a0a69f](https://github.com/serendipity-seeker/explorer-frontend/commit/8a0a69fffcd3486b6fed8dcac1ca87856288ea6a))
* add 'link' variant to Button component with corresponding styles ([efdc902](https://github.com/serendipity-seeker/explorer-frontend/commit/efdc902857e71397f881c1017852dbe8e3ca384d))
* add ADDRESS_ASSETS endpoint to QLI_API_ENDPOINTS for wallet functionality ([7ce3b1b](https://github.com/serendipity-seeker/explorer-frontend/commit/7ce3b1bfc7f3d401c930b6df0989b6887ee1a77b))
* Add address, transaction, and tick routes to network routes ([7d84e71](https://github.com/serendipity-seeker/explorer-frontend/commit/7d84e71bd21b0d59df692165545921e9eb34ee75))
* Add AddressDetails component ([10a062d](https://github.com/serendipity-seeker/explorer-frontend/commit/10a062d60d1782f95719edd3eea45d6b2ea09eb0))
* Add AddressPage and export it in network index.ts ([0b13c60](https://github.com/serendipity-seeker/explorer-frontend/commit/0b13c60acd2647e659ca98a26545acb188da945d))
* Add AddressPage component ([bc5b2cd](https://github.com/serendipity-seeker/explorer-frontend/commit/bc5b2cdb9a5f820dfa76420cc0e4062db96994eb))
* Add addressService ([76ea2dd](https://github.com/serendipity-seeker/explorer-frontend/commit/76ea2dd383ee65dfa25046a1e06cbbe9cfd04bbe))
* Add addressSlice ([b349f59](https://github.com/serendipity-seeker/explorer-frontend/commit/b349f59d990cd88c23074b2333d939bb9982aa1a))
* add alert for asset transfer warning and improve prop types in TransactionDetails component ([31f54d1](https://github.com/serendipity-seeker/explorer-frontend/commit/31f54d1be30d1926ac9922f403125abb89054a38))
* Add AppLoader component for displaying loading animation ([52ed3c3](https://github.com/serendipity-seeker/explorer-frontend/commit/52ed3c33aaab234a898b5c37ad2a90329941a217))
* Add archiver-v2.api.ts for Archiver V2 API integration ([964fcfd](https://github.com/serendipity-seeker/explorer-frontend/commit/964fcfdfe194eaf3aedd6f8bf68d22882fd02fc0))
* Add archiver-v2.types.ts for Archiver V2 types ([fd9693c](https://github.com/serendipity-seeker/explorer-frontend/commit/fd9693cf6c6fdda234fb56173f5ced1a237b7259))
* Add archiverApiService impl ([0d2cd0a](https://github.com/serendipity-seeker/explorer-frontend/commit/0d2cd0a50795ae8ace77c390ebc6ec7e6d645993))
* add Asset interface to define asset properties in QLI types ([e679dd5](https://github.com/serendipity-seeker/explorer-frontend/commit/e679dd5541847025691b77a49bcb88fe535bf1a0))
* add asset transfer functionality and update imports ([252518e](https://github.com/serendipity-seeker/explorer-frontend/commit/252518e8aa8a25abbf1021e81624fa2de4838fb0))
* add asset transfer support in TxItem component ([25327f0](https://github.com/serendipity-seeker/explorer-frontend/commit/25327f0cbcc7aa3a0c771a5bf51d89740ca1200a))
* add asset transfer warning message to network page localization files ([160cedf](https://github.com/serendipity-seeker/explorer-frontend/commit/160cedf4d8058774923c64e64c208d8b92ccd04f))
* add assets tokens and smart contracts pages with corresponding components and API integration ([b8a15f0](https://github.com/serendipity-seeker/explorer-frontend/commit/b8a15f0771a7b8725cde0c2651b4a113f5fda0a2))
* Add blockSlice to store and update index.ts ([2e4bfeb](https://github.com/serendipity-seeker/explorer-frontend/commit/2e4bfebdb9716c6a972a57029cbc1f8d1504c7fa))
* Add Breadcrumbs component ([e0fddf6](https://github.com/serendipity-seeker/explorer-frontend/commit/e0fddf68d68f4fe70761c839cbddf4f4136ddcd6))
* Add buildUrlWithQueryParams to handle routes with query params and update tx route ([a97d8f7](https://github.com/serendipity-seeker/explorer-frontend/commit/a97d8f7e0be8d815c25576929430d36b27afaafe))
* Add burnedSupply and rich list translations ([e9a70ad](https://github.com/serendipity-seeker/explorer-frontend/commit/e9a70ad1a171bd0869822d95b133ef8d335f5c76))
* Add Button component for UI buttons ([9c47172](https://github.com/serendipity-seeker/explorer-frontend/commit/9c47172a01653598da6c9d618a5991045f8779cc))
* Add CheckIcon ([3a1c3c0](https://github.com/serendipity-seeker/explorer-frontend/commit/3a1c3c003435b26f2afbafa9801934583a0a0c5a))
* Add ChevronToggleButton component ([1eede24](https://github.com/serendipity-seeker/explorer-frontend/commit/1eede24d46155f81bc0bf42c686415fc3543f97e))
* Add colors.ts file to define theme colors ([5a5cb63](https://github.com/serendipity-seeker/explorer-frontend/commit/5a5cb636f727ea387b03982490aaa1a71ddf26d6))
* add commitlint configuration for standardized commit message formatting ([e61fd6d](https://github.com/serendipity-seeker/explorer-frontend/commit/e61fd6d63a389c188da22ed2d881ad2347439c0b))
* Add components index module ([cce7f8b](https://github.com/serendipity-seeker/explorer-frontend/commit/cce7f8bdf5b6bee16eaeda94847d00be4068bfce))
* Add constants for batch size and tick size in address module ([30373ed](https://github.com/serendipity-seeker/explorer-frontend/commit/30373edf13100b552abaae35db34656d10f4dacd))
* Add convertHistoricalTxToLatestTx and convertHistoricalTxToTxWithStatus adapters ([6a41bfd](https://github.com/serendipity-seeker/explorer-frontend/commit/6a41bfdf86494b19811affa8995c9a4dd393f822))
* Add convertTxV2ToTxWithStatus adapter function ([b1e58ed](https://github.com/serendipity-seeker/explorer-frontend/commit/b1e58ed8f2ae432b9197b7dd59b5dc746e202eb3))
* Add copy icon in tx, address ([81dbcd6](https://github.com/serendipity-seeker/explorer-frontend/commit/81dbcd638e2468b102aef80f8698b21203639585))
* Add copy text component ([458b909](https://github.com/serendipity-seeker/explorer-frontend/commit/458b9097e8cbf185cc44f4cca20cee3f5247c782))
* Add CopyTextButton component to UI library ([6cb97d7](https://github.com/serendipity-seeker/explorer-frontend/commit/6cb97d773fdedf45e2e62c2b0860cc11c26b1ad5))
* Add custom InfiniteScroll component with IntersectionObserver impl ([b60af74](https://github.com/serendipity-seeker/explorer-frontend/commit/b60af74b4df94efe6963f3ce85fe3e706cd4900c))
* add customizable tag prop to CardItem component for flexible rendering ([48e236d](https://github.com/serendipity-seeker/explorer-frontend/commit/48e236d849b9abfef687aaade2fb7f023756416c))
* Add DotsLoader component ([73c90df](https://github.com/serendipity-seeker/explorer-frontend/commit/73c90dfd135d1bf687c6bf8a504f80ddcd4c0138))
* Add draft HistoricalTxs component ([5af44ed](https://github.com/serendipity-seeker/explorer-frontend/commit/5af44eda587d99fdcbf3310aa24971a5d98aa16d))
* Add draft Transactions component ([8d53d54](https://github.com/serendipity-seeker/explorer-frontend/commit/8d53d5402147fd08709f62ac76d83d85a51dc2d8))
* Add envConfig ([e75fe51](https://github.com/serendipity-seeker/explorer-frontend/commit/e75fe518cf2933ee3c3c22b266e2273b16a0b879))
* Add envConfig ([b549f3c](https://github.com/serendipity-seeker/explorer-frontend/commit/b549f3c7618e6f94c6562540f3504c4b9eb3ad7b))
* Add envConfig file for storing environment variables ([eddbdeb](https://github.com/serendipity-seeker/explorer-frontend/commit/eddbdeb2e92994d88407e836db3b84b87207e4ca))
* Add ErrorBoundary component for handling errors in UI ([ca965bd](https://github.com/serendipity-seeker/explorer-frontend/commit/ca965bda93bd14a36ba6c0f3ddd2d19fbdc1d0dc))
* add exchanges page and relocate rich list under wallets path ([da0c5b9](https://github.com/serendipity-seeker/explorer-frontend/commit/da0c5b9a48f28b74822517325a24631be2aa4da6))
* add exchanges, tokens and sc badges on address and transactions pages ([6771d6a](https://github.com/serendipity-seeker/explorer-frontend/commit/6771d6a77424f753f69bf1106903f97e31d9c4b7))
* Add exclamation triangle icon ([675440f](https://github.com/serendipity-seeker/explorer-frontend/commit/675440fcfb2772fbf34943ec6ed432eb012e47de))
* add fee label to network page translations ([651abaa](https://github.com/serendipity-seeker/explorer-frontend/commit/651abaae39e1cd59fce597019c127e82f482d037))
* Add fetchTransferTxWithStatus and fetchHistoricalTx functions to txService ([6153ed7](https://github.com/serendipity-seeker/explorer-frontend/commit/6153ed791bf8e186dba4f14df704d55dc057c754))
* add FireIcon SVG and export in index.ts ([8919361](https://github.com/serendipity-seeker/explorer-frontend/commit/8919361bdccdf4c5edcd2aacbef3b108811ed61b))
* Add Footer component for displaying website footer ([817893f](https://github.com/serendipity-seeker/explorer-frontend/commit/817893f3eb958e2cde8f29597a637659e89f0067))
* Add generic error img ([9e3140d](https://github.com/serendipity-seeker/explorer-frontend/commit/9e3140d92b248f0bc9afac8651af6cf01dbc8fe5))
* Add getRichList function to archiverApiService ([1fbe79f](https://github.com/serendipity-seeker/explorer-frontend/commit/1fbe79fff7c9d34b3718fc996a523e345765fd9a))
* Add getTxType function to handle transaction type determination ([d6dcee4](https://github.com/serendipity-seeker/explorer-frontend/commit/d6dcee40251fdb29739e63a04df4642c615c3e35))
* add GitHub Actions workflow for automated deployment ([b08702f](https://github.com/serendipity-seeker/explorer-frontend/commit/b08702fa86a2e77da3edc821a4340c147f4dcce6))
* add GitHub Actions workflow for automated release process ([e6e4b18](https://github.com/serendipity-seeker/explorer-frontend/commit/e6e4b18a01b08ebb88e8dc09a47c2c9c9578cac9))
* add GitHub Actions workflow for commitlint to enforce commit message standards ([8bbf0ce](https://github.com/serendipity-seeker/explorer-frontend/commit/8bbf0ce99dfffec31aac041e0ba51fe2c625cf9c))
* add GitHub Actions workflow for linting on pull requests and pushes ([4b89e46](https://github.com/serendipity-seeker/explorer-frontend/commit/4b89e463e145331a00de96171e9093ea774f6379))
* add GitHub Actions workflow for linting pull requests ([8c3aa15](https://github.com/serendipity-seeker/explorer-frontend/commit/8c3aa1509169e514ada4472c9b70496c077d9638))
* Add handleThunkError function ([16f4804](https://github.com/serendipity-seeker/explorer-frontend/commit/16f4804b6bb98a1da87e79f4053d0caedea1ac1a))
* Add HistoricalTx interface ([2901bb3](https://github.com/serendipity-seeker/explorer-frontend/commit/2901bb3b175269940f90d1da8dc677bdc00e0d41))
* Add HistoricalTxs component for displaying historical transactions of an address ([10b91bc](https://github.com/serendipity-seeker/explorer-frontend/commit/10b91bcb01b943d99b7f9fe1d3e2e52b4e848c48))
* add Husky hooks for commit message linting and pre-commit checks ([851622e](https://github.com/serendipity-seeker/explorer-frontend/commit/851622e73ca78a8a72b043bdcb639042371104d5))
* Add info color variants to tailwind.config.js ([75df54f](https://github.com/serendipity-seeker/explorer-frontend/commit/75df54fe3c8b20402bec37e8e0ffa3022f9db9ec))
* Add inital api utils ([6e01740](https://github.com/serendipity-seeker/explorer-frontend/commit/6e017405e50d542ab8ee3ee8581144a9745c9334))
* Add inital api utils ([311c060](https://github.com/serendipity-seeker/explorer-frontend/commit/311c06076a17419872943dec684ed377212f3000))
* Add initial migrated TickPage ([110ba03](https://github.com/serendipity-seeker/explorer-frontend/commit/110ba0396018b8a82ac628fdd3cca7d3d759c5ba))
* Add isTxType guard function to check if a value is a valid TxType ([5485143](https://github.com/serendipity-seeker/explorer-frontend/commit/5485143c64b99cd29ef75e05156ac338b6f1aa9e))
* add MAIN_ASSETS_ISSUER constant to qubic-ts utility ([1d923d8](https://github.com/serendipity-seeker/explorer-frontend/commit/1d923d813f626fc94bed6993ce51a5a31179cb9c))
* Add mapHistoricalTxToLatestTx adapter function for historical transactions ([df25827](https://github.com/serendipity-seeker/explorer-frontend/commit/df2582799ce736026b5ea75463d0cb9e068f5b02))
* Add migrated and improved files and directories for contexts, types, router, pages, components, assets, and hooks ([1b1e82e](https://github.com/serendipity-seeker/explorer-frontend/commit/1b1e82ea6c8eccd66bc838db4a38494251bb4389))
* Add migrated and improved files and directories for contexts, types, router, pages, components, assets, and hooks ([2eda50f](https://github.com/serendipity-seeker/explorer-frontend/commit/2eda50f1b3dc004b9e781bdd82206e634853a1e0))
* Add migrated utils ([662adaa](https://github.com/serendipity-seeker/explorer-frontend/commit/662adaacd910386dbcb356b55bcc3ec86a2c7a38))
* Add migrated utils ([8af634f](https://github.com/serendipity-seeker/explorer-frontend/commit/8af634fc0745a5b8299fe8d7af24b452ff424499))
* Add Modal component to UI components ([3a26417](https://github.com/serendipity-seeker/explorer-frontend/commit/3a264173fa76a93db3d9e8955f06e1241fb0a600))
* Add modal root element to index.html ([d7200bd](https://github.com/serendipity-seeker/explorer-frontend/commit/d7200bda8d793b875367c2f736bd103a62d24c78))
* Add new arrow icons for chevron-down, chevron-left, and chevron-right and home ([7ea6c2d](https://github.com/serendipity-seeker/explorer-frontend/commit/7ea6c2d4c8de10ab7758c9c3623956148ae5562a))
* Add new icons ([b61c1ed](https://github.com/serendipity-seeker/explorer-frontend/commit/b61c1edf51df44b33fdfebb25e41a199c6685a98))
* Add new SVG icons for check circle, exclamation circle, and exclamation triangle ([eee3450](https://github.com/serendipity-seeker/explorer-frontend/commit/eee3450ff48bdfd1318c5d8e7ba55e9549d0b6c1))
* add optional label prop to AddressLink component for customizable display ([42ce672](https://github.com/serendipity-seeker/explorer-frontend/commit/42ce6721f4f465abed88748657358f839521295b))
* Add OverviewCardItem component to network components ([9fda019](https://github.com/serendipity-seeker/explorer-frontend/commit/9fda019c2eb8c1d7366d02422be5c4ecc72a8476))
* Add OverviewPage and TickPage to network module ([8d137f8](https://github.com/serendipity-seeker/explorer-frontend/commit/8d137f8b5de5b928b55afc2465a68d702ddd0089))
* add page size selection on rich list page ([36becb9](https://github.com/serendipity-seeker/explorer-frontend/commit/36becb98571f28a1264f4a932d0b01c266f4b6ac))
* Add PagesLayout component for wrapping page content with a footer ([b8989c7](https://github.com/serendipity-seeker/explorer-frontend/commit/b8989c75b4d0223b115204c90ab05f2ed736ae08))
* Add PaginationBar component ([e134393](https://github.com/serendipity-seeker/explorer-frontend/commit/e1343930200307547229043cb1edfc4c0a27f23f))
* Add properties for incoming and outgoing transfers to Balance interface ([68f0c7b](https://github.com/serendipity-seeker/explorer-frontend/commit/68f0c7be0b9bc5558dba2df5c94a200e9dab6c05))
* Add qubic loader animation json ([60b0575](https://github.com/serendipity-seeker/explorer-frontend/commit/60b0575f43641b9aa7ef27d704b7003e76dfcc7e))
* Add qubic-ts utils ([ad238e0](https://github.com/serendipity-seeker/explorer-frontend/commit/ad238e09918f472a585c26c88edb50cfecd9ecbe))
* add replaceContentOnError prop to InfiniteScroll for improved error handling ([0b77898](https://github.com/serendipity-seeker/explorer-frontend/commit/0b7789869e56d9debe22982809477cd5cbe21c7b))
* add responsive size prop to Select component in TickTransactions ([1bb597d](https://github.com/serendipity-seeker/explorer-frontend/commit/1bb597d23803732ccaf1eabffdb9672cdb8a4133))
* Add rich list page with pagination ([a318902](https://github.com/serendipity-seeker/explorer-frontend/commit/a318902899d8914abccd5a70166fb09fc8aca4f6))
* Add RichListErrorRow component ([40ebcd5](https://github.com/serendipity-seeker/explorer-frontend/commit/40ebcd50ef932e77244337f7d20df46287ec51cc))
* Add richListLoadFailed translation ([07f1762](https://github.com/serendipity-seeker/explorer-frontend/commit/07f17626534a77aad7065b58b3cfca403502625a))
* Add RichListPage component to display a list of rich addresses in the network ([d29513e](https://github.com/serendipity-seeker/explorer-frontend/commit/d29513e107e49e7609dcfcea6167973a88ea1221))
* Add RichListPage to NetworkConfig ([8834ea2](https://github.com/serendipity-seeker/explorer-frontend/commit/8834ea293f035a64729f235bdbec04b68047d9b3))
* Add richListReducer to networkReducer ([0247679](https://github.com/serendipity-seeker/explorer-frontend/commit/02476790879959df32e9008b558246055ee21476))
* Add RichListRow component for displaying individual rows in the rich list table ([6525577](https://github.com/serendipity-seeker/explorer-frontend/commit/652557724855b201ea4312f9cb860f95c29644e6))
* Add RichListRow, RichListSkeletonRow, and RichListErrorRow components ([980bfb9](https://github.com/serendipity-seeker/explorer-frontend/commit/980bfb9799e2456e3509360d2e136a0f06f9b000))
* Add RichListSkeletonRow component for displaying skeleton loading state in the rich list table ([13ffa63](https://github.com/serendipity-seeker/explorer-frontend/commit/13ffa63817db86e713299dceb1081d8de3752ef2))
* Add richListSlice ([e6c3b26](https://github.com/serendipity-seeker/explorer-frontend/commit/e6c3b26aad69526847f88363375be076a39be155))
* Add richListWarning translations ([7afe010](https://github.com/serendipity-seeker/explorer-frontend/commit/7afe01099b647dedaff932dc2777b57451ae52a0))
* Add screens.ts to define responsive breakpoints using Tailwind CSS config ([56ddbcc](https://github.com/serendipity-seeker/explorer-frontend/commit/56ddbcc6f78714795bc997392a8c2eb1e956e23d))
* Add Select component for dropdown selection ([0bd8d49](https://github.com/serendipity-seeker/explorer-frontend/commit/0bd8d4981b397ff74702895858e8bcec6f56b7e1))
* add semantic release configuration for automated versioning and changelog generation ([cd5b4b9](https://github.com/serendipity-seeker/explorer-frontend/commit/cd5b4b9146f322a63342a29f06c6fb4b8ba33bbc))
* add size prop to Select component for customizable styling ([36646ea](https://github.com/serendipity-seeker/explorer-frontend/commit/36646ea51772ab9e7ff58aef89840db075eb41ce))
* add Skeleton component ([b7951fd](https://github.com/serendipity-seeker/explorer-frontend/commit/b7951fd11840c8001a619a1cd49072cee4c311d0))
* Add tailwind-scrollbar plugin to tailwind.config.js ([170a245](https://github.com/serendipity-seeker/explorer-frontend/commit/170a245637c50ab0472a42de6a4854dba844423d))
* Add theme module with colors, screens, and theme exports ([e51e5e0](https://github.com/serendipity-seeker/explorer-frontend/commit/e51e5e0af09e47bc78e7b4d1b59f5349bf406c3a))
* Add Tooltip component to UI library ([f045aba](https://github.com/serendipity-seeker/explorer-frontend/commit/f045abadabaafab07af4aae40b3572f1f8c285ed))
* Add Transactions component ([70b18fa](https://github.com/serendipity-seeker/explorer-frontend/commit/70b18faff79a390f0e2adf9c5e01001b1a60bb56))
* Add TransactionWithStatus type ([0b1c1dd](https://github.com/serendipity-seeker/explorer-frontend/commit/0b1c1dd091eacd09c2900894921482c01578c339))
* Add TxPage component ([52abd2e](https://github.com/serendipity-seeker/explorer-frontend/commit/52abd2e961875698ebc24b4ca68b5f4bf779605a))
* Add TxPage component for displaying transaction details ([ff88e64](https://github.com/serendipity-seeker/explorer-frontend/commit/ff88e64d84115c811e204df21004a72dc4b5a328))
* add unique key prop to asset list items in AddressPage ([87f9069](https://github.com/serendipity-seeker/explorer-frontend/commit/87f90695585b325c9cf2ca156d8a31f541c7511a))
* Add useLatestTransactions hook for fetching latest transactions ([401286a](https://github.com/serendipity-seeker/explorer-frontend/commit/401286a80717c254b3e1180d8900f5dbde009b9c))
* Add useTailwindBreakpoint hook ([5f625fc](https://github.com/serendipity-seeker/explorer-frontend/commit/5f625fce741c171c1a942dd798f0681ff74e5147))
* Add useValidatedTxType hook for handling validated transaction types ([2b44e8b](https://github.com/serendipity-seeker/explorer-frontend/commit/2b44e8b1084c916536702f2990e2c748edd50231))
* conditionally render asset name for MAIN_ASSETS_ISSUER in AddressPage ([0dadc32](https://github.com/serendipity-seeker/explorer-frontend/commit/0dadc3207e685e8afc1eb047859beb875a87abc9))
* consolidate release and deployment workflows into a single workflow ([31118d3](https://github.com/serendipity-seeker/explorer-frontend/commit/31118d34d14b5350f98df65eb75c7b9c2ffde871))
* Define __APP_VERSION__ in Vite config and update type declaration ([341237f](https://github.com/serendipity-seeker/explorer-frontend/commit/341237f44eaa98dde6b2d1ecb272a02c83510811))
* display assets in AddressPage with CardItem component ([37f83a9](https://github.com/serendipity-seeker/explorer-frontend/commit/37f83a9e14b14096e58da9d8d4daf9daf37933d6))
* enhance address page with new components and optimizations ([1cadda9](https://github.com/serendipity-seeker/explorer-frontend/commit/1cadda9198964a4591954b996999cac4c3244d60))
* enhance formatDate function with options for short date format and time zone inclusion ([e2040a0](https://github.com/serendipity-seeker/explorer-frontend/commit/e2040a024d84137105d33891b4cf8ff1949bf705))
* enhance getAddress thunk to include address assets in the response ([0b3c659](https://github.com/serendipity-seeker/explorer-frontend/commit/0b3c659d91643e60665298fe9d8847a1468d4b60))
* enhance header layout and add navigation menu components ([34e274a](https://github.com/serendipity-seeker/explorer-frontend/commit/34e274aaf0df2b807d54ffa473697b660fe26f68))
* enhance InfiniteScroll and Select components ([f5af1fb](https://github.com/serendipity-seeker/explorer-frontend/commit/f5af1fb9f3f5ac631b0f95fbd98fbbc8573b2eed))
* enhance OverviewPage improving UX ([2c2fb85](https://github.com/serendipity-seeker/explorer-frontend/commit/2c2fb857da181bac7f397da06af34d6087aa1dfb))
* enhance RichListPage to use new API and improve UX ([2abef91](https://github.com/serendipity-seeker/explorer-frontend/commit/2abef9184936d97de4c752d6215fbbfd92c883c5))
* enhance TransactionDetails to support asset transfer display ([7e8926c](https://github.com/serendipity-seeker/explorer-frontend/commit/7e8926c185474723d64077b715e35d9bb1f19079))
* fetch full commit history in deployment workflow ([9013c44](https://github.com/serendipity-seeker/explorer-frontend/commit/9013c44aae292f576c44f8384df0b290a418bdbf))
* Implement fetching of burnedQus ([5104324](https://github.com/serendipity-seeker/explorer-frontend/commit/5104324dd90a9089d2806a73e8231f382f28a7df))
* Implement getLatestStats endpoint on ArchiverApiService ([7f27358](https://github.com/serendipity-seeker/explorer-frontend/commit/7f27358e8befab5522b81a0fe4ca6f17331b4937))
* Implement historic and transfer txs ([e111ef4](https://github.com/serendipity-seeker/explorer-frontend/commit/e111ef430a179856060163d0e4d40ea7faec96ab))
* implement PageLayout and error fallback component and refactor error handling in network pages ([f42b2a9](https://github.com/serendipity-seeker/explorer-frontend/commit/f42b2a9623cb1354c7d307b9592f7889b1956e41))
* Implement Reset address state on AddressPage component unmount ([fb93e23](https://github.com/serendipity-seeker/explorer-frontend/commit/fb93e23019559a64cf252c7a2064a816679623fd))
* Implement resetSate reducer func ([bac26c2](https://github.com/serendipity-seeker/explorer-frontend/commit/bac26c2e66ccca12017496806054891d963d3dbd))
* Improve RichListPage layout and add warning message ([4d5265d](https://github.com/serendipity-seeker/explorer-frontend/commit/4d5265d4c1955f10577c013173d9278dc6fe1e38))
* install new dependencies and add engine specifications and enhance scripts in package.json ([ea0a72e](https://github.com/serendipity-seeker/explorer-frontend/commit/ea0a72e2c77532042be2d440d33cac3883d6aa25))
* integrate react-helmet-async for improved SEO and page metadata management ([8cbde2e](https://github.com/serendipity-seeker/explorer-frontend/commit/8cbde2e531661af9bafef040a5934f617142002a))
* integrate total value locked in overview page ([0e2d36f](https://github.com/serendipity-seeker/explorer-frontend/commit/0e2d36f5cf3777cbbc24ce483fdb52048a144f4e))
* migrate historical transactions to rtk query ([0f4d4e8](https://github.com/serendipity-seeker/explorer-frontend/commit/0f4d4e83070a7d40af5ac53cd4843c095a56d6dd))
* migrate search slice to rtk query and improve architecture ([8dfbd63](https://github.com/serendipity-seeker/explorer-frontend/commit/8dfbd63903eeaf441ed5b84380867139bbb34144))
* migrate Tick Page to archiver endpoints and improve UX ([af6a55b](https://github.com/serendipity-seeker/explorer-frontend/commit/af6a55bb01f5d7efba46f7ec06d7a9a5ce4c8e0c))
* migrate transactions to rtk query ([4680e38](https://github.com/serendipity-seeker/explorer-frontend/commit/4680e3804c1462c1e262bf96efeea3d311b1ae59))
* refactor header components for improved layout and RTL support ([f1332e3](https://github.com/serendipity-seeker/explorer-frontend/commit/f1332e33fccd452f2061c8067163a8a116f2e46b))
* remove data status field on tick status component ([6d2efcd](https://github.com/serendipity-seeker/explorer-frontend/commit/6d2efcd3f9ff46a8c54bda41d2e0fb5103060e0b))
* Update amount column alignment ([3e5b56c](https://github.com/serendipity-seeker/explorer-frontend/commit/3e5b56c2d63ea1425668ba545e42ba12bf77d539))
* update API service to use enhanced makeApiRequest func and add getAddressAssets method ([eea8553](https://github.com/serendipity-seeker/explorer-frontend/commit/eea855390bc17179c6f7976e304ff3247818a452))
* Update app translations ([a235fee](https://github.com/serendipity-seeker/explorer-frontend/commit/a235fee96ef5a5a7ea7f53585e03f63c8ce09a72))
* Update archiver of tx page ([8ff2967](https://github.com/serendipity-seeker/explorer-frontend/commit/8ff29673272212997f61471273eeefac7bcf68da))
* update deployment workflow to trigger on successful release completion ([0a19db4](https://github.com/serendipity-seeker/explorer-frontend/commit/0a19db4c02540173dfc89f50a8abc6fc1d1ea676))
* Update Footer component to include Rich List link ([f57b5b7](https://github.com/serendipity-seeker/explorer-frontend/commit/f57b5b718194165e2cb4a0eba464fffefe84d9fb))
* update footer to display dynamic app version ([0f30e0b](https://github.com/serendipity-seeker/explorer-frontend/commit/0f30e0b97d7aa232332152272c6b74ac0d8c5bf2))
* Update get rich list implementation with new api updates ([6d50ea9](https://github.com/serendipity-seeker/explorer-frontend/commit/6d50ea96820a0f0a30d2c92656b0ef43fa17b9f9))
* Update getOverview to get latest stats and include burnedQus ([14e4f63](https://github.com/serendipity-seeker/explorer-frontend/commit/14e4f631a53258a7704d84ac573a8cdf918a2291))
* Update i18n translations for network app ([3841898](https://github.com/serendipity-seeker/explorer-frontend/commit/38418982d36ecceebd9f5729be8da3e74a0663d8))
* Update Overview component to include burnedQus card ([81d2825](https://github.com/serendipity-seeker/explorer-frontend/commit/81d2825205020acd528735dfd64b549d6daed13d))
* update Overview Page to use new API's and enhance UX ([30c078f](https://github.com/serendipity-seeker/explorer-frontend/commit/30c078f44dbcdb92c6d3277c43c4888345edac45))
* update Overview Page to use new API's and enhance UX ([4543ed7](https://github.com/serendipity-seeker/explorer-frontend/commit/4543ed7731c60d904bc4c2f81feb4ddf16b76b29))
* update OverviewPage to use search parameters for ticks table pagination ([c7633a3](https://github.com/serendipity-seeker/explorer-frontend/commit/c7633a3abad3f75f533b204835216df27e3ec4e0))
* Update RichListPage to display 15 entities per page and handle errors properly ([cc30435](https://github.com/serendipity-seeker/explorer-frontend/commit/cc30435ead784079213374f24eb1651a0b5fa9fc))
* update tick quality source to be from stats api ([98f1051](https://github.com/serendipity-seeker/explorer-frontend/commit/98f1051fbd68596d0d7e762d331074f9c0856e8b))
* update TxItem to use QX_ADDRESS for asset transfer condition ([7f988ac](https://github.com/serendipity-seeker/explorer-frontend/commit/7f988ac44e4d18b18b98c09462bb6976f0b3e690))
* Update ui components index module ([647fd2d](https://github.com/serendipity-seeker/explorer-frontend/commit/647fd2d0d1c6b7765ef2f2aa9c4d0b2c80777093))

# [1.12.0](https://github.com/qubic/explorer-frontend/compare/v1.11.1...v1.12.0) (2025-01-07)


### Bug Fixes

* correct typo in ticksLoadFailed message in network-page localization ([d9bf5e4](https://github.com/qubic/explorer-frontend/commit/d9bf5e462a61711b6b018c6d3c940c4401f6894c))
* extend twMerge to support custom Tailwind scales and classes ([457d8c8](https://github.com/qubic/explorer-frontend/commit/457d8c893669585145935b8fe039e508185f9c5e))
* swap arrow icons in TxItem component for transaction direction ([ab19bdc](https://github.com/qubic/explorer-frontend/commit/ab19bdc208def5efba19221e828697fad9729f02))


### Features

* add assets tokens and smart contracts pages with corresponding components and API integration ([b8a15f0](https://github.com/qubic/explorer-frontend/commit/b8a15f0771a7b8725cde0c2651b4a113f5fda0a2))
* add exchanges page and relocate rich list under wallets path ([da0c5b9](https://github.com/qubic/explorer-frontend/commit/da0c5b9a48f28b74822517325a24631be2aa4da6))
* add exchanges, tokens and sc badges on address and transactions pages ([6771d6a](https://github.com/qubic/explorer-frontend/commit/6771d6a77424f753f69bf1106903f97e31d9c4b7))
* enhance address page with new components and optimizations ([1cadda9](https://github.com/qubic/explorer-frontend/commit/1cadda9198964a4591954b996999cac4c3244d60))
* enhance formatDate function with options for short date format and time zone inclusion ([e2040a0](https://github.com/qubic/explorer-frontend/commit/e2040a024d84137105d33891b4cf8ff1949bf705))
* enhance header layout and add navigation menu components ([34e274a](https://github.com/qubic/explorer-frontend/commit/34e274aaf0df2b807d54ffa473697b660fe26f68))
* implement PageLayout and error fallback component and refactor error handling in network pages ([f42b2a9](https://github.com/qubic/explorer-frontend/commit/f42b2a9623cb1354c7d307b9592f7889b1956e41))
* integrate total value locked in overview page ([0e2d36f](https://github.com/qubic/explorer-frontend/commit/0e2d36f5cf3777cbbc24ce483fdb52048a144f4e))
* migrate historical transactions to rtk query ([0f4d4e8](https://github.com/qubic/explorer-frontend/commit/0f4d4e83070a7d40af5ac53cd4843c095a56d6dd))
* migrate search slice to rtk query and improve architecture ([8dfbd63](https://github.com/qubic/explorer-frontend/commit/8dfbd63903eeaf441ed5b84380867139bbb34144))
* migrate transactions to rtk query ([4680e38](https://github.com/qubic/explorer-frontend/commit/4680e3804c1462c1e262bf96efeea3d311b1ae59))
* refactor header components for improved layout and RTL support ([f1332e3](https://github.com/qubic/explorer-frontend/commit/f1332e33fccd452f2061c8067163a8a116f2e46b))

# [1.12.0-rc.1](https://github.com/qubic/explorer-frontend/compare/v1.11.1...v1.12.0-rc.1) (2025-01-07)


### Bug Fixes

* correct typo in ticksLoadFailed message in network-page localization ([d9bf5e4](https://github.com/qubic/explorer-frontend/commit/d9bf5e462a61711b6b018c6d3c940c4401f6894c))
* extend twMerge to support custom Tailwind scales and classes ([457d8c8](https://github.com/qubic/explorer-frontend/commit/457d8c893669585145935b8fe039e508185f9c5e))
* swap arrow icons in TxItem component for transaction direction ([ab19bdc](https://github.com/qubic/explorer-frontend/commit/ab19bdc208def5efba19221e828697fad9729f02))


### Features

* add assets tokens and smart contracts pages with corresponding components and API integration ([b8a15f0](https://github.com/qubic/explorer-frontend/commit/b8a15f0771a7b8725cde0c2651b4a113f5fda0a2))
* add exchanges page and relocate rich list under wallets path ([da0c5b9](https://github.com/qubic/explorer-frontend/commit/da0c5b9a48f28b74822517325a24631be2aa4da6))
* add exchanges, tokens and sc badges on address and transactions pages ([6771d6a](https://github.com/qubic/explorer-frontend/commit/6771d6a77424f753f69bf1106903f97e31d9c4b7))
* enhance address page with new components and optimizations ([1cadda9](https://github.com/qubic/explorer-frontend/commit/1cadda9198964a4591954b996999cac4c3244d60))
* enhance formatDate function with options for short date format and time zone inclusion ([e2040a0](https://github.com/qubic/explorer-frontend/commit/e2040a024d84137105d33891b4cf8ff1949bf705))
* enhance header layout and add navigation menu components ([34e274a](https://github.com/qubic/explorer-frontend/commit/34e274aaf0df2b807d54ffa473697b660fe26f68))
* implement PageLayout and error fallback component and refactor error handling in network pages ([f42b2a9](https://github.com/qubic/explorer-frontend/commit/f42b2a9623cb1354c7d307b9592f7889b1956e41))
* integrate total value locked in overview page ([0e2d36f](https://github.com/qubic/explorer-frontend/commit/0e2d36f5cf3777cbbc24ce483fdb52048a144f4e))
* migrate historical transactions to rtk query ([0f4d4e8](https://github.com/qubic/explorer-frontend/commit/0f4d4e83070a7d40af5ac53cd4843c095a56d6dd))
* migrate search slice to rtk query and improve architecture ([8dfbd63](https://github.com/qubic/explorer-frontend/commit/8dfbd63903eeaf441ed5b84380867139bbb34144))
* migrate transactions to rtk query ([4680e38](https://github.com/qubic/explorer-frontend/commit/4680e3804c1462c1e262bf96efeea3d311b1ae59))
* refactor header components for improved layout and RTL support ([f1332e3](https://github.com/qubic/explorer-frontend/commit/f1332e33fccd452f2061c8067163a8a116f2e46b))

## [1.11.1](https://github.com/qubic/explorer-frontend/compare/v1.11.0...v1.11.1) (2024-12-14)


### Bug Fixes

* update rank calculation to use dynamic page size ([9049ee2](https://github.com/qubic/explorer-frontend/commit/9049ee22eb7ac0b8e9d07a5a31cb8ceb99eca1ed))

# [1.11.0](https://github.com/qubic/explorer-frontend/compare/v1.10.0...v1.11.0) (2024-12-12)


### Features

* add page size selection on rich list page ([36becb9](https://github.com/qubic/explorer-frontend/commit/36becb98571f28a1264f4a932d0b01c266f4b6ac))
* add responsive size prop to Select component in TickTransactions ([1bb597d](https://github.com/qubic/explorer-frontend/commit/1bb597d23803732ccaf1eabffdb9672cdb8a4133))
* add size prop to Select component for customizable styling ([36646ea](https://github.com/qubic/explorer-frontend/commit/36646ea51772ab9e7ff58aef89840db075eb41ce))
* remove data status field on tick status component ([6d2efcd](https://github.com/qubic/explorer-frontend/commit/6d2efcd3f9ff46a8c54bda41d2e0fb5103060e0b))
* update TxItem to use QX_ADDRESS for asset transfer condition ([7f988ac](https://github.com/qubic/explorer-frontend/commit/7f988ac44e4d18b18b98c09462bb6976f0b3e690))

# [1.11.0-rc.1](https://github.com/qubic/explorer-frontend/compare/v1.10.0...v1.11.0-rc.1) (2024-12-12)


### Features

* add page size selection on rich list page ([36becb9](https://github.com/qubic/explorer-frontend/commit/36becb98571f28a1264f4a932d0b01c266f4b6ac))
* add responsive size prop to Select component in TickTransactions ([1bb597d](https://github.com/qubic/explorer-frontend/commit/1bb597d23803732ccaf1eabffdb9672cdb8a4133))
* add size prop to Select component for customizable styling ([36646ea](https://github.com/qubic/explorer-frontend/commit/36646ea51772ab9e7ff58aef89840db075eb41ce))
* remove data status field on tick status component ([6d2efcd](https://github.com/qubic/explorer-frontend/commit/6d2efcd3f9ff46a8c54bda41d2e0fb5103060e0b))
* update TxItem to use QX_ADDRESS for asset transfer condition ([7f988ac](https://github.com/qubic/explorer-frontend/commit/7f988ac44e4d18b18b98c09462bb6976f0b3e690))

# [1.10.0](https://github.com/qubic/explorer-frontend/compare/v1.9.1...v1.10.0) (2024-12-02)


### Bug Fixes

* **env:** add VITE_QUBIC_API_URL to example environment file ([3795c49](https://github.com/qubic/explorer-frontend/commit/3795c497484bc6dc21027611ff15c26c47c7b4ee))
* **i18n:** update Chinese translations for network page ([b9cff09](https://github.com/qubic/explorer-frontend/commit/b9cff095d42a49d6c0e221d48ad53523c906c114))
* update import path for GetLatestStatsResponse ([0d574b5](https://github.com/qubic/explorer-frontend/commit/0d574b538cb9329b71988b597acc2e9ac426df5d))


### Features

* enhance OverviewPage improving UX ([2c2fb85](https://github.com/qubic/explorer-frontend/commit/2c2fb857da181bac7f397da06af34d6087aa1dfb))
* enhance RichListPage to use new API and improve UX ([2abef91](https://github.com/qubic/explorer-frontend/commit/2abef9184936d97de4c752d6215fbbfd92c883c5))
* update OverviewPage to use search parameters for ticks table pagination ([c7633a3](https://github.com/qubic/explorer-frontend/commit/c7633a3abad3f75f533b204835216df27e3ec4e0))

# [1.10.0-rc.1](https://github.com/qubic/explorer-frontend/compare/v1.9.1...v1.10.0-rc.1) (2024-12-01)


### Bug Fixes

* **env:** add VITE_QUBIC_API_URL to example environment file ([3795c49](https://github.com/qubic/explorer-frontend/commit/3795c497484bc6dc21027611ff15c26c47c7b4ee))
* **i18n:** update Chinese translations for network page ([b9cff09](https://github.com/qubic/explorer-frontend/commit/b9cff095d42a49d6c0e221d48ad53523c906c114))
* update import path for GetLatestStatsResponse ([0d574b5](https://github.com/qubic/explorer-frontend/commit/0d574b538cb9329b71988b597acc2e9ac426df5d))


### Features

* enhance OverviewPage improving UX ([2c2fb85](https://github.com/qubic/explorer-frontend/commit/2c2fb857da181bac7f397da06af34d6087aa1dfb))
* enhance RichListPage to use new API and improve UX ([2abef91](https://github.com/qubic/explorer-frontend/commit/2abef9184936d97de4c752d6215fbbfd92c883c5))
* update OverviewPage to use search parameters for ticks table pagination ([c7633a3](https://github.com/qubic/explorer-frontend/commit/c7633a3abad3f75f533b204835216df27e3ec4e0))

## [1.9.1](https://github.com/qubic/explorer-frontend/compare/v1.9.0...v1.9.1) (2024-11-28)


### Bug Fixes

* **i18n:** update chinese translations ([08c5dc1](https://github.com/qubic/explorer-frontend/commit/08c5dc128cbb918835c58573f5d41b3312d5eee6))

## [1.9.1-rc.1](https://github.com/qubic/explorer-frontend/compare/v1.9.0...v1.9.1-rc.1) (2024-11-28)


### Bug Fixes

* **i18n:** update chinese translations ([08c5dc1](https://github.com/qubic/explorer-frontend/commit/08c5dc128cbb918835c58573f5d41b3312d5eee6))

# [1.9.0](https://github.com/qubic/explorer-frontend/compare/v1.8.2...v1.9.0) (2024-11-18)


### Features

* add replaceContentOnError prop to InfiniteScroll for improved error handling ([0b77898](https://github.com/qubic/explorer-frontend/commit/0b7789869e56d9debe22982809477cd5cbe21c7b))
* add Skeleton component ([b7951fd](https://github.com/qubic/explorer-frontend/commit/b7951fd11840c8001a619a1cd49072cee4c311d0))
* enhance InfiniteScroll and Select components ([f5af1fb](https://github.com/qubic/explorer-frontend/commit/f5af1fb9f3f5ac631b0f95fbd98fbbc8573b2eed))
* integrate react-helmet-async for improved SEO and page metadata management ([8cbde2e](https://github.com/qubic/explorer-frontend/commit/8cbde2e531661af9bafef040a5934f617142002a))
* migrate Tick Page to archiver endpoints and improve UX ([af6a55b](https://github.com/qubic/explorer-frontend/commit/af6a55bb01f5d7efba46f7ec06d7a9a5ce4c8e0c))
* update Overview Page to use new API's and enhance UX ([30c078f](https://github.com/qubic/explorer-frontend/commit/30c078f44dbcdb92c6d3277c43c4888345edac45))
* update Overview Page to use new API's and enhance UX ([4543ed7](https://github.com/qubic/explorer-frontend/commit/4543ed7731c60d904bc4c2f81feb4ddf16b76b29))

# [1.9.0-rc.2](https://github.com/qubic/explorer-frontend/compare/v1.9.0-rc.1...v1.9.0-rc.2) (2024-11-18)


### Features

* add replaceContentOnError prop to InfiniteScroll for improved error handling ([0b77898](https://github.com/qubic/explorer-frontend/commit/0b7789869e56d9debe22982809477cd5cbe21c7b))

# [1.9.0-rc.1](https://github.com/qubic/explorer-frontend/compare/v1.8.2...v1.9.0-rc.1) (2024-11-18)


### Features

* add Skeleton component ([b7951fd](https://github.com/qubic/explorer-frontend/commit/b7951fd11840c8001a619a1cd49072cee4c311d0))
* enhance InfiniteScroll and Select components ([f5af1fb](https://github.com/qubic/explorer-frontend/commit/f5af1fb9f3f5ac631b0f95fbd98fbbc8573b2eed))
* integrate react-helmet-async for improved SEO and page metadata management ([8cbde2e](https://github.com/qubic/explorer-frontend/commit/8cbde2e531661af9bafef040a5934f617142002a))
* migrate Tick Page to archiver endpoints and improve UX ([af6a55b](https://github.com/qubic/explorer-frontend/commit/af6a55bb01f5d7efba46f7ec06d7a9a5ce4c8e0c))
* update Overview Page to use new API's and enhance UX ([30c078f](https://github.com/qubic/explorer-frontend/commit/30c078f44dbcdb92c6d3277c43c4888345edac45))
* update Overview Page to use new API's and enhance UX ([4543ed7](https://github.com/qubic/explorer-frontend/commit/4543ed7731c60d904bc4c2f81feb4ddf16b76b29))

## [1.8.2](https://github.com/qubic/explorer-frontend/compare/v1.8.1...v1.8.2) (2024-10-27)


### Bug Fixes

* update address display logic for asset transfers ([0618f7c](https://github.com/qubic/explorer-frontend/commit/0618f7c483aa5ffcd9bc4dfd201d5ec37de65384))

## [1.8.2-rc.1](https://github.com/qubic/explorer-frontend/compare/v1.8.1...v1.8.2-rc.1) (2024-10-27)


### Bug Fixes

* update address display logic for asset transfers ([0618f7c](https://github.com/qubic/explorer-frontend/commit/0618f7c483aa5ffcd9bc4dfd201d5ec37de65384))

## [1.8.1](https://github.com/qubic/explorer-frontend/compare/v1.8.0...v1.8.1) (2024-10-26)


### Bug Fixes

* conditionally display asset transfer warning ([63a18d4](https://github.com/qubic/explorer-frontend/commit/63a18d474ae344e9b00ac62e09f36140963a50b9))

## [1.8.1-rc.1](https://github.com/qubic/explorer-frontend/compare/v1.8.0...v1.8.1-rc.1) (2024-10-26)


### Bug Fixes

* conditionally display asset transfer warning ([63a18d4](https://github.com/qubic/explorer-frontend/commit/63a18d474ae344e9b00ac62e09f36140963a50b9))

# [1.8.0](https://github.com/qubic/explorer-frontend/compare/v1.7.0...v1.8.0) (2024-10-26)


### Features

* add alert for asset transfer warning and improve prop types in TransactionDetails component ([31f54d1](https://github.com/qubic/explorer-frontend/commit/31f54d1be30d1926ac9922f403125abb89054a38))
* add asset transfer functionality and update imports ([252518e](https://github.com/qubic/explorer-frontend/commit/252518e8aa8a25abbf1021e81624fa2de4838fb0))
* add asset transfer support in TxItem component ([25327f0](https://github.com/qubic/explorer-frontend/commit/25327f0cbcc7aa3a0c771a5bf51d89740ca1200a))
* add asset transfer warning message to network page localization files ([160cedf](https://github.com/qubic/explorer-frontend/commit/160cedf4d8058774923c64e64c208d8b92ccd04f))
* add fee label to network page translations ([651abaa](https://github.com/qubic/explorer-frontend/commit/651abaae39e1cd59fce597019c127e82f482d037))
* enhance TransactionDetails to support asset transfer display ([7e8926c](https://github.com/qubic/explorer-frontend/commit/7e8926c185474723d64077b715e35d9bb1f19079))

# [1.8.0-rc.2](https://github.com/qubic/explorer-frontend/compare/v1.8.0-rc.1...v1.8.0-rc.2) (2024-10-26)


### Features

* add alert for asset transfer warning and improve prop types in TransactionDetails component ([31f54d1](https://github.com/qubic/explorer-frontend/commit/31f54d1be30d1926ac9922f403125abb89054a38))
* add asset transfer warning message to network page localization files ([160cedf](https://github.com/qubic/explorer-frontend/commit/160cedf4d8058774923c64e64c208d8b92ccd04f))

# [1.8.0-rc.1](https://github.com/qubic/explorer-frontend/compare/v1.7.0...v1.8.0-rc.1) (2024-10-24)


### Features

* add asset transfer functionality and update imports ([252518e](https://github.com/qubic/explorer-frontend/commit/252518e8aa8a25abbf1021e81624fa2de4838fb0))
* add asset transfer support in TxItem component ([25327f0](https://github.com/qubic/explorer-frontend/commit/25327f0cbcc7aa3a0c771a5bf51d89740ca1200a))
* add fee label to network page translations ([651abaa](https://github.com/qubic/explorer-frontend/commit/651abaae39e1cd59fce597019c127e82f482d037))
* enhance TransactionDetails to support asset transfer display ([7e8926c](https://github.com/qubic/explorer-frontend/commit/7e8926c185474723d64077b715e35d9bb1f19079))

# [1.7.0](https://github.com/qubic/explorer-frontend/compare/v1.6.0...v1.7.0) (2024-10-21)


### Bug Fixes

* adjust gap spacing in asset list items on AddressPage ([8643218](https://github.com/qubic/explorer-frontend/commit/8643218fd3336b1284904daa1b2eb13f75e5729f))
* **i18n:** update Chinese translation for 'tick' to '刻度' ([ed0f4b0](https://github.com/qubic/explorer-frontend/commit/ed0f4b0617146c4d5f816a50c15c6cca480d0754))


### Features

* add ADDRESS_ASSETS endpoint to QLI_API_ENDPOINTS for wallet functionality ([7ce3b1b](https://github.com/qubic/explorer-frontend/commit/7ce3b1bfc7f3d401c930b6df0989b6887ee1a77b))
* add Asset interface to define asset properties in QLI types ([e679dd5](https://github.com/qubic/explorer-frontend/commit/e679dd5541847025691b77a49bcb88fe535bf1a0))
* add customizable tag prop to CardItem component for flexible rendering ([48e236d](https://github.com/qubic/explorer-frontend/commit/48e236d849b9abfef687aaade2fb7f023756416c))
* add MAIN_ASSETS_ISSUER constant to qubic-ts utility ([1d923d8](https://github.com/qubic/explorer-frontend/commit/1d923d813f626fc94bed6993ce51a5a31179cb9c))
* add optional label prop to AddressLink component for customizable display ([42ce672](https://github.com/qubic/explorer-frontend/commit/42ce6721f4f465abed88748657358f839521295b))
* add unique key prop to asset list items in AddressPage ([87f9069](https://github.com/qubic/explorer-frontend/commit/87f90695585b325c9cf2ca156d8a31f541c7511a))
* conditionally render asset name for MAIN_ASSETS_ISSUER in AddressPage ([0dadc32](https://github.com/qubic/explorer-frontend/commit/0dadc3207e685e8afc1eb047859beb875a87abc9))
* display assets in AddressPage with CardItem component ([37f83a9](https://github.com/qubic/explorer-frontend/commit/37f83a9e14b14096e58da9d8d4daf9daf37933d6))
* enhance getAddress thunk to include address assets in the response ([0b3c659](https://github.com/qubic/explorer-frontend/commit/0b3c659d91643e60665298fe9d8847a1468d4b60))
* update API service to use enhanced makeApiRequest func and add getAddressAssets method ([eea8553](https://github.com/qubic/explorer-frontend/commit/eea855390bc17179c6f7976e304ff3247818a452))

# [1.7.0-rc.1](https://github.com/qubic/explorer-frontend/compare/v1.6.0...v1.7.0-rc.1) (2024-10-21)


### Bug Fixes

* adjust gap spacing in asset list items on AddressPage ([8643218](https://github.com/qubic/explorer-frontend/commit/8643218fd3336b1284904daa1b2eb13f75e5729f))
* **i18n:** update Chinese translation for 'tick' to '刻度' ([ed0f4b0](https://github.com/qubic/explorer-frontend/commit/ed0f4b0617146c4d5f816a50c15c6cca480d0754))


### Features

* add ADDRESS_ASSETS endpoint to QLI_API_ENDPOINTS for wallet functionality ([7ce3b1b](https://github.com/qubic/explorer-frontend/commit/7ce3b1bfc7f3d401c930b6df0989b6887ee1a77b))
* add Asset interface to define asset properties in QLI types ([e679dd5](https://github.com/qubic/explorer-frontend/commit/e679dd5541847025691b77a49bcb88fe535bf1a0))
* add customizable tag prop to CardItem component for flexible rendering ([48e236d](https://github.com/qubic/explorer-frontend/commit/48e236d849b9abfef687aaade2fb7f023756416c))
* add MAIN_ASSETS_ISSUER constant to qubic-ts utility ([1d923d8](https://github.com/qubic/explorer-frontend/commit/1d923d813f626fc94bed6993ce51a5a31179cb9c))
* add optional label prop to AddressLink component for customizable display ([42ce672](https://github.com/qubic/explorer-frontend/commit/42ce6721f4f465abed88748657358f839521295b))
* add unique key prop to asset list items in AddressPage ([87f9069](https://github.com/qubic/explorer-frontend/commit/87f90695585b325c9cf2ca156d8a31f541c7511a))
* conditionally render asset name for MAIN_ASSETS_ISSUER in AddressPage ([0dadc32](https://github.com/qubic/explorer-frontend/commit/0dadc3207e685e8afc1eb047859beb875a87abc9))
* display assets in AddressPage with CardItem component ([37f83a9](https://github.com/qubic/explorer-frontend/commit/37f83a9e14b14096e58da9d8d4daf9daf37933d6))
* enhance getAddress thunk to include address assets in the response ([0b3c659](https://github.com/qubic/explorer-frontend/commit/0b3c659d91643e60665298fe9d8847a1468d4b60))
* update API service to use enhanced makeApiRequest func and add getAddressAssets method ([eea8553](https://github.com/qubic/explorer-frontend/commit/eea855390bc17179c6f7976e304ff3247818a452))

# [1.6.0](https://github.com/qubic/explorer-frontend/compare/v1.5.1...v1.6.0) (2024-10-13)


### Bug Fixes

* adjust layout in Error404Page to improve responsiveness ([5515a22](https://github.com/qubic/explorer-frontend/commit/5515a222c164695554d90ed3cc2093d79c98619d))
* prevent body scrolling when modal is open on desktop and mobile ([211b43b](https://github.com/qubic/explorer-frontend/commit/211b43b7d4bbca1931caf5d80c35c897cf523562))
* remove old richlistpage ([78b95ff](https://github.com/qubic/explorer-frontend/commit/78b95ff5c83adbf6236457e773d32ef534262e1e))
* remove unused exclamation-triangle icon SVG from assets ([2e49580](https://github.com/qubic/explorer-frontend/commit/2e49580b10fbdcd69cbe7aa645b599c876533055))
* reorder class names for consistency and readability across components ([3799144](https://github.com/qubic/explorer-frontend/commit/3799144371bedcb2494421277b243df287361c93))
* replace CirculatingCoinsIcon with FireIcon in OverviewPage ([fc372ba](https://github.com/qubic/explorer-frontend/commit/fc372bad25d65c144bb20555256f0a5abed219ea))
* update input text size in SearchBar for improved readability ([19f46d6](https://github.com/qubic/explorer-frontend/commit/19f46d6b58881b84339c392f66ddca6627da1eba))
* update qubic-ts-library version to ^0.1.2 in pnpm-lock.yaml ([38602da](https://github.com/qubic/explorer-frontend/commit/38602da38cdc834d60d5e9e5c70a68a6e8d81b40))


### Features

* add .eslintignore file to exclude build outputs, dependencies, and various config files ([b159e4b](https://github.com/qubic/explorer-frontend/commit/b159e4b7df89aeb592e4f7c244cc8dc7889b0147))
* add .prettierignore file ([8a0a69f](https://github.com/qubic/explorer-frontend/commit/8a0a69fffcd3486b6fed8dcac1ca87856288ea6a))
* add 'link' variant to Button component with corresponding styles ([efdc902](https://github.com/qubic/explorer-frontend/commit/efdc902857e71397f881c1017852dbe8e3ca384d))
* add commitlint configuration for standardized commit message formatting ([e61fd6d](https://github.com/qubic/explorer-frontend/commit/e61fd6d63a389c188da22ed2d881ad2347439c0b))
* add FireIcon SVG and export in index.ts ([8919361](https://github.com/qubic/explorer-frontend/commit/8919361bdccdf4c5edcd2aacbef3b108811ed61b))
* add GitHub Actions workflow for automated deployment ([b08702f](https://github.com/qubic/explorer-frontend/commit/b08702fa86a2e77da3edc821a4340c147f4dcce6))
* add GitHub Actions workflow for automated release process ([e6e4b18](https://github.com/qubic/explorer-frontend/commit/e6e4b18a01b08ebb88e8dc09a47c2c9c9578cac9))
* add GitHub Actions workflow for commitlint to enforce commit message standards ([8bbf0ce](https://github.com/qubic/explorer-frontend/commit/8bbf0ce99dfffec31aac041e0ba51fe2c625cf9c))
* add GitHub Actions workflow for linting on pull requests and pushes ([4b89e46](https://github.com/qubic/explorer-frontend/commit/4b89e463e145331a00de96171e9093ea774f6379))
* add GitHub Actions workflow for linting pull requests ([8c3aa15](https://github.com/qubic/explorer-frontend/commit/8c3aa1509169e514ada4472c9b70496c077d9638))
* add Husky hooks for commit message linting and pre-commit checks ([851622e](https://github.com/qubic/explorer-frontend/commit/851622e73ca78a8a72b043bdcb639042371104d5))
* add semantic release configuration for automated versioning and changelog generation ([cd5b4b9](https://github.com/qubic/explorer-frontend/commit/cd5b4b9146f322a63342a29f06c6fb4b8ba33bbc))
* consolidate release and deployment workflows into a single workflow ([31118d3](https://github.com/qubic/explorer-frontend/commit/31118d34d14b5350f98df65eb75c7b9c2ffde871))
* Define __APP_VERSION__ in Vite config and update type declaration ([341237f](https://github.com/qubic/explorer-frontend/commit/341237f44eaa98dde6b2d1ecb272a02c83510811))
* fetch full commit history in deployment workflow ([9013c44](https://github.com/qubic/explorer-frontend/commit/9013c44aae292f576c44f8384df0b290a418bdbf))
* install new dependencies and add engine specifications and enhance scripts in package.json ([ea0a72e](https://github.com/qubic/explorer-frontend/commit/ea0a72e2c77532042be2d440d33cac3883d6aa25))
* update deployment workflow to trigger on successful release completion ([0a19db4](https://github.com/qubic/explorer-frontend/commit/0a19db4c02540173dfc89f50a8abc6fc1d1ea676))
* update footer to display dynamic app version ([0f30e0b](https://github.com/qubic/explorer-frontend/commit/0f30e0b97d7aa232332152272c6b74ac0d8c5bf2))
* update tick quality source to be from stats api ([98f1051](https://github.com/qubic/explorer-frontend/commit/98f1051fbd68596d0d7e762d331074f9c0856e8b))

# [1.6.0-rc.5](https://github.com/qubic/explorer-frontend/compare/v1.6.0-rc.4...v1.6.0-rc.5) (2024-10-13)


### Features

* update tick quality source to be from stats api ([98f1051](https://github.com/qubic/explorer-frontend/commit/98f1051fbd68596d0d7e762d331074f9c0856e8b))

# [1.6.0-rc.4](https://github.com/qubic/explorer-frontend/compare/v1.6.0-rc.3...v1.6.0-rc.4) (2024-10-12)


### Features

* consolidate release and deployment workflows into a single workflow ([31118d3](https://github.com/qubic/explorer-frontend/commit/31118d34d14b5350f98df65eb75c7b9c2ffde871))

# [1.6.0-rc.3](https://github.com/qubic/explorer-frontend/compare/v1.6.0-rc.2...v1.6.0-rc.3) (2024-10-12)


### Features

* fetch full commit history in deployment workflow ([9013c44](https://github.com/qubic/explorer-frontend/commit/9013c44aae292f576c44f8384df0b290a418bdbf))

# [1.6.0-rc.2](https://github.com/qubic/explorer-frontend/compare/v1.6.0-rc.1...v1.6.0-rc.2) (2024-10-12)


### Features

* update deployment workflow to trigger on successful release completion ([0a19db4](https://github.com/qubic/explorer-frontend/commit/0a19db4c02540173dfc89f50a8abc6fc1d1ea676))

# [1.6.0-rc.1](https://github.com/qubic/explorer-frontend/compare/v1.5.1...v1.6.0-rc.1) (2024-10-12)


### Bug Fixes

* adjust layout in Error404Page to improve responsiveness ([5515a22](https://github.com/qubic/explorer-frontend/commit/5515a222c164695554d90ed3cc2093d79c98619d))
* prevent body scrolling when modal is open on desktop and mobile ([211b43b](https://github.com/qubic/explorer-frontend/commit/211b43b7d4bbca1931caf5d80c35c897cf523562))
* remove old richlistpage ([78b95ff](https://github.com/qubic/explorer-frontend/commit/78b95ff5c83adbf6236457e773d32ef534262e1e))
* remove unused exclamation-triangle icon SVG from assets ([2e49580](https://github.com/qubic/explorer-frontend/commit/2e49580b10fbdcd69cbe7aa645b599c876533055))
* reorder class names for consistency and readability across components ([3799144](https://github.com/qubic/explorer-frontend/commit/3799144371bedcb2494421277b243df287361c93))
* replace CirculatingCoinsIcon with FireIcon in OverviewPage ([fc372ba](https://github.com/qubic/explorer-frontend/commit/fc372bad25d65c144bb20555256f0a5abed219ea))
* update input text size in SearchBar for improved readability ([19f46d6](https://github.com/qubic/explorer-frontend/commit/19f46d6b58881b84339c392f66ddca6627da1eba))
* update qubic-ts-library version to ^0.1.2 in pnpm-lock.yaml ([38602da](https://github.com/qubic/explorer-frontend/commit/38602da38cdc834d60d5e9e5c70a68a6e8d81b40))


### Features

* add .eslintignore file to exclude build outputs, dependencies, and various config files ([b159e4b](https://github.com/qubic/explorer-frontend/commit/b159e4b7df89aeb592e4f7c244cc8dc7889b0147))
* add .prettierignore file ([8a0a69f](https://github.com/qubic/explorer-frontend/commit/8a0a69fffcd3486b6fed8dcac1ca87856288ea6a))
* add 'link' variant to Button component with corresponding styles ([efdc902](https://github.com/qubic/explorer-frontend/commit/efdc902857e71397f881c1017852dbe8e3ca384d))
* add commitlint configuration for standardized commit message formatting ([e61fd6d](https://github.com/qubic/explorer-frontend/commit/e61fd6d63a389c188da22ed2d881ad2347439c0b))
* add FireIcon SVG and export in index.ts ([8919361](https://github.com/qubic/explorer-frontend/commit/8919361bdccdf4c5edcd2aacbef3b108811ed61b))
* add GitHub Actions workflow for automated deployment ([b08702f](https://github.com/qubic/explorer-frontend/commit/b08702fa86a2e77da3edc821a4340c147f4dcce6))
* add GitHub Actions workflow for automated release process ([e6e4b18](https://github.com/qubic/explorer-frontend/commit/e6e4b18a01b08ebb88e8dc09a47c2c9c9578cac9))
* add GitHub Actions workflow for commitlint to enforce commit message standards ([8bbf0ce](https://github.com/qubic/explorer-frontend/commit/8bbf0ce99dfffec31aac041e0ba51fe2c625cf9c))
* add GitHub Actions workflow for linting on pull requests and pushes ([4b89e46](https://github.com/qubic/explorer-frontend/commit/4b89e463e145331a00de96171e9093ea774f6379))
* add GitHub Actions workflow for linting pull requests ([8c3aa15](https://github.com/qubic/explorer-frontend/commit/8c3aa1509169e514ada4472c9b70496c077d9638))
* add Husky hooks for commit message linting and pre-commit checks ([851622e](https://github.com/qubic/explorer-frontend/commit/851622e73ca78a8a72b043bdcb639042371104d5))
* add semantic release configuration for automated versioning and changelog generation ([cd5b4b9](https://github.com/qubic/explorer-frontend/commit/cd5b4b9146f322a63342a29f06c6fb4b8ba33bbc))
* Define __APP_VERSION__ in Vite config and update type declaration ([341237f](https://github.com/qubic/explorer-frontend/commit/341237f44eaa98dde6b2d1ecb272a02c83510811))
* install new dependencies and add engine specifications and enhance scripts in package.json ([ea0a72e](https://github.com/qubic/explorer-frontend/commit/ea0a72e2c77532042be2d440d33cac3883d6aa25))
* update footer to display dynamic app version ([0f30e0b](https://github.com/qubic/explorer-frontend/commit/0f30e0b97d7aa232332152272c6b74ac0d8c5bf2))

# Changelog

## v1.5.1 - v1.5.1 2024-09-24T22:19:14Z

## What's Changed
- Implemented archiver v2 api
- Migrated archiver trasnactions v1 endpoints to v2
- Implemented timestamp display on transaction items
- Updated dev proxies implementation
- Updated formatDate function to handle splitting dates
- Updated AddressPage to get latest transactions from archiver v2 api
- Optimised InfiniteScroll component


**Full Changelog**: https://github.com/qubic/explorer-frontend/compare/v1.5.0...v1.5.1

---

## v1.5.0 - v1.5.0 2024-09-24T22:26:45Z

## What's Changed

- Removed all Fuse template code.
- Replaced MUI and Styled Components with Tailwind CSS for styling.
- Migrated the project to React using Vite and TypeScript.
- Enhanced localization functionality.
- Upgraded the search implementation and user interface.
- Improved development proxies by removing unnecessary libraries like Express and creating a proxy server with Vite.
- Improved and fixed layout of rich list page

**Full Changelog**: https://github.com/qubic/explorer-frontend/compare/v1.4.3...v1.5.0

---

## v1.4.3 - v1.4.3 2024-09-24T22:35:04Z

## What's Changed
* Implemented the burnedQus feature on the overview page.
* Integrated the rich list page, including full implementation.


**Full Changelog**: https://github.com/qubic/explorer-frontend/compare/v1.4.2...v1.4.3

---

## v1.4.2 - v1.4.2 2024-09-24T22:46:09Z

## What's Changed
* Fixed transactions state cached issue


**Full Changelog**: https://github.com/qubic/explorer-frontend/compare/v1.4.1...v1.4.2

---

## v1.4.1 - v1.4.1 2024-09-24T22:48:25Z

## What's Changed
* Switched archiver in tick page by @konan-5 in https://github.com/qubic/explorer-frontend/pull/92
* Fix tx and tick page by @konan-5 in https://github.com/qubic/explorer-frontend/pull/94
* Update tx item for SC many transactions by @konan-5 in https://github.com/qubic/explorer-frontend/pull/96
* Fix tx item and add archiver in address page by @konan-5 in https://github.com/qubic/explorer-frontend/pull/99
* Update tx item for new design by @konan-5 in https://github.com/qubic/explorer-frontend/pull/100
* Update search function and fix responsive in tick page by @konan-5 in https://github.com/qubic/explorer-frontend/pull/101
* feat: Add transactions and historic txs implementation by @alexmf91 in https://github.com/qubic/explorer-frontend/pull/108
* refactor: Update TickPage component by @alexmf91 in https://github.com/qubic/explorer-frontend/pull/109
* feat: Add UI improvements on AddresPage and transaction pill by @alexmf91 in https://github.com/qubic/explorer-frontend/pull/111
* feat: Update explorer logo and add new icons on Overview page by @alexmf91 in https://github.com/qubic/explorer-frontend/pull/114
* feat: Update ARCHIVER url and fix search modal not closing after click by @alexmf91 in https://github.com/qubic/explorer-frontend/pull/117
* feat: Update app loader animation by @alexmf91 in https://github.com/qubic/explorer-frontend/pull/119
* feat: Implement footer for all pages by @alexmf91 in https://github.com/qubic/explorer-frontend/pull/120
* fix: Update footer layout implementation by @alexmf91 in https://github.com/qubic/explorer-frontend/pull/121
* fix: Implement handling for non executed txs by @alexmf91 in https://github.com/qubic/explorer-frontend/pull/123
* feat: Enhance Historical Transactions Handling and Fix Sorting Issues by @alexmf91 in https://github.com/qubic/explorer-frontend/pull/125


**Full Changelog**: https://github.com/qubic/explorer-frontend/compare/v1.4.0...v1.4.1

---

## v1.3.0 - v1.3.0 2024-09-24T22:52:47Z

## What's Changed
* add: Add arabic language feature by @konan-5 in https://github.com/qubic/explorer-frontend/pull/75
* Solved below 73, 74, 76 issues by @konan-5 in https://github.com/qubic/explorer-frontend/pull/77
* Fixed automatic setting of the language by @konan-5 in https://github.com/qubic/explorer-frontend/pull/88
* Update executed in txstatus by @konan-5 in https://github.com/qubic/explorer-frontend/pull/89
* Fix executed status in tx page by @konan-5 in https://github.com/qubic/explorer-frontend/pull/90
* Update tx item for SC many transactions by @konan-5 in https://github.com/qubic/explorer-frontend/pull/96


**Full Changelog**: https://github.com/qubic/explorer-frontend/compare/v1.2.0...v1.3.0

---

## v1.4.0 - v1.4.0 2024-09-24T22:49:21Z

## What's Changed
* Solved 3 issues by @konan-5 in https://github.com/qubic/explorer-frontend/pull/82
* Add archiver enpoint and copy icon at the end of addresses by @konan-5 in https://github.com/qubic/explorer-frontend/pull/84
* Fixed search function and press enter event by @konan-5 in https://github.com/qubic/explorer-frontend/pull/85


**Full Changelog**: https://github.com/qubic/explorer-frontend/compare/v1.3.0...v1.4.0

---

## v1.2.0 - v1.2.0 2024-09-24T22:51:42Z

## What's Changed
* Renamed url block-> tick by @konan-5 in https://github.com/qubic/explorer-frontend/pull/66
* Add infinite scroll in tick and address page by @konan-5 in https://github.com/qubic/explorer-frontend/pull/67
* Update search by ID by @konan-5 in https://github.com/qubic/explorer-frontend/pull/68
* Add no transaction status in tick and address page and  fixed type of tx view. by @konan-5 in https://github.com/qubic/explorer-frontend/pull/69
* Add entries in tx by @konan-5 in https://github.com/qubic/explorer-frontend/pull/71


**Full Changelog**: https://github.com/qubic/explorer-frontend/compare/v1.1.0...v1.2.0

---

## v1.1.0 - v1.1.0 2024-09-24T22:57:49Z

## What's Changed
* Add fuse template environment by @konan-5 in https://github.com/qubic/explorer-frontend/pull/1
* Fix running errro and dev proxy by @konan-5 in https://github.com/qubic/explorer-frontend/pull/2
* Fix running error by @konan-5 in https://github.com/qubic/explorer-frontend/pull/3
* Add beta explorer page by @konan-5 in https://github.com/qubic/explorer-frontend/pull/8
* Add beta block explorer page by @konan-5 in https://github.com/qubic/explorer-frontend/pull/9
* Add address and transaction page by @konan-5 in https://github.com/qubic/explorer-frontend/pull/10
* Fixed mobile responsive by @konan-5 in https://github.com/qubic/explorer-frontend/pull/11
* Add loading status in all network pages by @konan-5 in https://github.com/qubic/explorer-frontend/pull/14
* Add husky and update eslint by @konan-5 in https://github.com/qubic/explorer-frontend/pull/22
* Add pagination in past tick by @konan-5 in https://github.com/qubic/explorer-frontend/pull/24
* Update search function by @konan-5 in https://github.com/qubic/explorer-frontend/pull/25
* Add .env sample and update readme by @konan-5 in https://github.com/qubic/explorer-frontend/pull/26
* Add range in ticks of overview page by @konan-5 in https://github.com/qubic/explorer-frontend/pull/27
* Update max width of overview page by @konan-5 in https://github.com/qubic/explorer-frontend/pull/28
* Add breadcrumbs and update small design. by @konan-5 in https://github.com/qubic/explorer-frontend/pull/32
* Fix overview page by @konan-5 in https://github.com/qubic/explorer-frontend/pull/35
* Update 404 page and Add environment for multi language by @konan-5 in https://github.com/qubic/explorer-frontend/pull/39
* Update multilanguage feature and fix some page. by @konan-5 in https://github.com/qubic/explorer-frontend/pull/41
* Update block name and unit by @konan-5 in https://github.com/qubic/explorer-frontend/pull/45
* Add footer and update format the value of amount by @konan-5 in https://github.com/qubic/explorer-frontend/pull/49
* Update footer by @konan-5 in https://github.com/qubic/explorer-frontend/pull/51
* Add search function and turkish language by @konan-5 in https://github.com/qubic/explorer-frontend/pull/54
* Add animate and fix responsive in global search by @konan-5 in https://github.com/qubic/explorer-frontend/pull/55
* Implement autofocus in global search by @konan-5 in https://github.com/qubic/explorer-frontend/pull/58


**Full Changelog**: https://github.com/qubic/explorer-frontend/commits/v1.1.0

---
