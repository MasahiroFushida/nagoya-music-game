/**
 * 授業データ
 * ここを編集することで各コマの内容を更新できます。
 *
 * slides:     スライドのURL（配列）。なければ null
 * project:    Unityプロジェクトのダウンロードリンク（配列）。なければ null
 * documents:  配布資料PDFのリンク（配列）。なければ省略。files/ に置いたPDFを指す
 * assignment: 課題の内容（文字列）。なければ null
 * deadline:   課題の締切（文字列）。なければ null
 *
 * openWeeks:  コース単位の設定。一覧ページで「第何回まで」を有効にするか（数値）。
 *             未設定なら全回有効。授業が進むごとに数字を増やしてください。
 */

const SITE_DATA = {
  game1: {
    title: "ゲーム1",
    semester: "春学期",
    description: "Unityを使ったゲーム制作の基礎を学びます。",
    weeks: [
      {
        week: 1,
        title: "ガイダンス",
        description: "授業の概要説明、開発環境を作る。Unityのインストール確認、授業の進め方・評価方法の説明。",
        slides: [
          { label: "第1回 ガイダンス スライド", url: "slides/game1_week01.html" }
        ],
        project: null,
        assignment: "以下のスクリーンショットを提出してください：\n1. Unity Hub でプロジェクトを作成した画面\n2. Unity Editor の起動画面\n3. VS Code を開いた画面（C#拡張機能のインストール確認）",
        deadline: "第2回授業開始時"
      },
      {
        week: 2,
        title: "Unityの基本操作",
        description: "Unityエディターの説明と基本操作。Scene・Game・Hierarchy・Inspectorビューの使い方、オブジェクトの配置と保存。",
        slides: [
          { label: "第2回 Unityの基本操作 スライド", url: "slides/game1_week02.html" }
        ],
        project: [
          { label: "Unityプロジェクト", url: "https://github.com/MasahiroFushida/game1_a/archive/refs/heads/main.zip" }
        ],
        assignment: "以下の手順でシーンを作成し、スクリーンショットを提出してください。\n1. Plane（地面）を1つ配置する\n2. 好きな3Dオブジェクト（Cube / Sphere / Cylinder など）を3つ以上配置する\n3. それぞれの Position・Rotation・Scale を変えて、同じ形にならないようにする\n4. シーンを保存して、Scene ビューのスクリーンショットを提出する",
        deadline: "第3回授業開始時"
      },
      {
        week: 3,
        title: "Unityの基礎①",
        description: "C#でコードを書いてみる。スクリプトの作成方法、Debug.Logの使い方、Playモードで動作確認。",
        slides: [
          { label: "第3回 Unityの基礎① スライド", url: "slides/game1_week03.html" }
        ],
        project: null,
        assignment: "「自己紹介スクリプトを作ろう」\n以下の手順でスクリプトを作成し、Console画面のスクリーンショットと作成した .cs ファイルを提出してください。\n1. C# スクリプトを新規作成し、ファイル名を「MyIntroduction」にする\n2. Start() の中に、以下の3つを Debug.Log で出力するコードを書く\n   ・自分の名前\n   ・好きな食べ物\n   ・今日の気分\n3. Update() の中に、Debug.Log で好きな言葉を1つ出力するコードを書く（毎フレーム表示されることを確認）\n4. 作成したスクリプトを Cube などのオブジェクトにアタッチする\n5. Playモードで実行し、Console ウィンドウに正しく表示されることを確認する\n6. Console ウィンドウのスクリーンショットと MyIntroduction.cs ファイルを提出する",
        deadline: "第4回授業開始時"
      },
      {
        week: 4,
        title: "Unityの基礎②",
        description: "オブジェクトを動かしてみる。Transformの基本（位置・回転・拡大縮小の制御）、キーボード入力で移動する処理。",
        slides: [
          { label: "第4回 Unityの基礎② スライド", url: "slides/game1_week04.html" }
        ],
        project: [
          { label: "Unityプロジェクト", url: "https://github.com/MasahiroFushida/game1_b/archive/refs/heads/main.zip" }
        ],
        assignment: "【課題】Sphereを動かしてみよう\n\n矢印キーで移動、スペースキーでジャンプできる Sphere を作ろう。\n\n■ 手順\n1. 新しいシーンに Plane（地面）と Sphere を配置する\n2. Sphere に Rigidbody コンポーネントを追加する\n   （Add Component → Rigidbody）\n3. C# スクリプトを新規作成し、ファイル名を「PlayerMove」にする\n4. Start() の中で Rigidbody を変数 rb に取得する\n   rb = GetComponent<Rigidbody>();\n5. Update() の中に以下の操作を実装する\n   ・矢印キー（↑↓←→）で前後左右に AddForce で力を加える\n   ・スペースキーで AddForce(Vector3.up * 200) のジャンプを加える\n     （ジャンプは GetKeyDown を使うこと）\n6. 作成したスクリプトを Sphere にアタッチする\n7. Playモードで実行し、矢印キーで移動・スペースでジャンプできることを確認する\n\n■ 提出物\n・Game ビューのスクリーンショット\n・PlayerMove.cs ファイル",
        deadline: "第5回授業開始時"
      },
      {
        week: 5,
        title: "Unityの基礎③",
        description: "Prefab・Material・Instantiate を学ぶ。Prefabで再利用可能なオブジェクトを作り、スクリプトから動的に生成する。",
        slides: [
          { label: "第5回 Unityの基礎③ スライド", url: "slides/game1_week05.html" }
        ],
        project: [
          { label: "Unityプロジェクト", url: "https://github.com/MasahiroFushida/game1_c/archive/refs/heads/main.zip" }
        ],
        assignment: "【課題】Prefab と Instantiate で弾を撃とう\n\nSpaceキーで弾（Bullet）を発射し、Enemy に当たったら両方とも消えるシーンを作ろう。\n\n■ 手順\n1. 新しいシーンに Plane（地面）と Player 用の Cube を配置する\n   ・Player の Cube には Tag「Player」を設定する\n2. 弾用の Cube を作り、小さめに変形（例：Scale 0.3, 0.3, 0.5）する\n3. C# スクリプト「BulletMove」を新規作成し、以下を実装する\n   ・Update() で transform.Translate(Vector3.forward * 0.1f) と書き、毎フレーム前進させる\n   ・OnCollisionEnter(Collision collision) で Destroy(gameObject) を呼び、衝突したら消えるようにする\n4. BulletMove を弾の Cube にアタッチし、Project の「Prefabs」フォルダにドラッグして Prefab 化する\n   ・Prefab 化が終わったら Hierarchy にある元の弾は削除しておく\n5. C# スクリプト「PlayerShoot」を新規作成し、以下を実装する\n   ・public GameObject bullet; を宣言する\n   ・Update() で Input.GetKeyDown(KeyCode.Space) のとき\n     Instantiate(bullet, transform.position + Vector3.forward * 2, Quaternion.identity); を呼ぶ\n6. PlayerShoot を Player にアタッチし、Inspector の bullet 欄に作成した Bullet Prefab をドラッグして紐付ける\n7. Enemy 用の Cube を Player の前方に配置し、Tag「Enemy」を設定する\n   ・C# スクリプト「EnemyHit」を作成し、OnCollisionEnter で Destroy(gameObject) を実装してアタッチする\n8. Playモードで実行し、Space キーで弾が飛び、Enemy に当たると両方消えることを確認する\n\n■ 提出物\n・Game ビューのスクリーンショット（弾を発射している瞬間が分かるもの）\n・BulletMove.cs / PlayerShoot.cs / EnemyHit.cs の3つの .cs ファイル",
        deadline: "第6回授業開始時"
      },
      {
        week: 6,
        title: "UIの基礎",
        description: "UIの作成方法。Text・Button・Imageの配置、Canvasの役割、ボタン操作で画面表示を変える。",
        slides: [
          { label: "第6回 UIの基礎 スライド", url: "slides/game1_week06.html" }
        ],
        project: [
          { label: "Unityプロジェクト", url: "https://github.com/MasahiroFushida/game1_d/archive/refs/heads/main.zip" }
        ],
        assignment: "【課題】Sキーで増えるスコア表示を作ろう\n\nSキーを押すたびにスコアが1ずつ増え、Canvas上のTextに反映されるシーンを作ろう。\n\n■ 手順\n1. 新しいシーンを作成し、Hierarchy 右クリック → UI → Text - Legacy で Text を1つ配置する\n   ・自動で Canvas と EventSystem も生成されることを確認する\n   ・Text オブジェクトの名前を「Score」に変更する\n   ・Inspector の Text 欄に「Score: 0」と入力し、Font Size を 40 程度に大きくする\n2. C# スクリプト「ScoreUI」を新規作成し、以下を実装する\n   ・冒頭に using UnityEngine.UI; を記述する\n   ・private int score; を宣言する\n   ・Text 型の変数 scoreText を宣言する\n   ・Start() で scoreText = GameObject.Find(\"Score\").GetComponent<Text>(); と書く\n   ・Update() の中で Input.GetKeyDown(KeyCode.S) が true のとき、\n       score++;\n       scoreText.text = \"Score: \" + score;\n     の2行を実行する\n3. Hierarchy で空の GameObject（または Cube）を作成し、ScoreUI スクリプトをアタッチする\n4. Playモードで実行し、Sキーを押すたびに画面の Score 表示が増えていくことを確認する\n\n■ 応用課題（任意・できる人だけ）\n・Aキーを押したらスコアが5増えるように if 文を追加する\n・もう1つ Text を配置して「High Score」を表示し、これまでの最大値を表示する\n・Score の Text を TextMeshPro に置き換える（using TMPro; と TextMeshProUGUI への変更）\n\n■ 提出物\n・Game ビューのスクリーンショット（Score が 3 以上になった画面）\n・ScoreUI.cs ファイル",
        deadline: "第7回授業開始時"
      },
      {
        week: 7,
        title: "当たり判定",
        description: "ColliderとRigidbodyの基本。衝突判定の仕組み、トリガーイベントの利用、簡単な接触判定を実装する。",
        slides: [
          { label: "第7回 当たり判定 スライド", url: "slides/game1_week07.html" }
        ],
        project: [
          { label: "Unityプロジェクト", url: "https://github.com/MasahiroFushida/game1_e/archive/refs/heads/main.zip" }
        ],
        assignment: "【必修課題】Stage5-1 を再現しよう（最小ライン）\n\nSpaceキーで弾（Tama）を撃ち、Enemyに当たると両方が消えるシーンを作ろう。\nスクリプトはスライド掲載のコードをそのままコピーして使ってOKです。\n\n■ 手順\n1. 新しいシーンを作成し、Plane（地面）を配置する\n2. Player用のCubeを配置する\n3. Enemy用のCubeを少し離れた位置に配置し、Rigidbodyを追加する\n4. 弾用のCubeを小さめに変形（例：Scale 0.3, 0.3, 0.5）し、Rigidbodyを追加する\n   ・C#スクリプト「Tama」を作成し、スライドのコードをコピーしてアタッチする\n   ・Project内に「Prefabs」フォルダを作り、弾をドラッグしてPrefab化する\n   ・Prefab化したらHierarchy上の元の弾は削除する\n5. C#スクリプト「Enemy」を作成し、スライドのコードをコピーしてEnemyにアタッチする\n6. C#スクリプト「Player」を作成し、スライドのコードをコピーしてPlayerにアタッチする\n   ・Player の Inspector の「Tama」欄に、作成したTama Prefabをドラッグして割り当てる\n7. Playモードで実行し、矢印キー（←→）で移動・SpaceキーでTamaを発射してEnemyに当たると両方消えることを確認する\n\n■ 提出物（必修）\n・Game ビューのスクリーンショット 1枚（弾が飛んでいる、または当たって消えた瞬間が分かるもの）\n・Player.cs 1ファイル\n\n──────────────────────────────\n\n【応用課題（任意）】余力がある人だけ\n\n● 応用A：敵を動かしてみる\n  ・C#スクリプト「Enemy_5_3」を作成し、public float enemySpeed; を使って敵を手前方向に移動させる\n  ・Inspector の Enemy Speed を変えて挙動を試す（例：0.05 でゆっくり / 0.2 で速い）\n\n● 応用B：スコアを画面表示する\n  ・Tag「Tama」を作成し、Tama Prefab に設定する\n  ・Canvas + Text（名前を「ScoreTest」に変更）を配置する\n  ・C#スクリプト「GameManager」を作成し、空のGameObjectにアタッチする\n  ・C#スクリプト「Enemy_5_8」を作成し、Tamaタグに当たったときだけスコアを加算して消える処理を実装する\n  ・スライドのコードを参考にして実装する\n\n応用課題に挑戦した場合は、追加で .cs ファイルを提出してください。",
        deadline: "第8回授業開始時"
      },
      {
        week: 8,
        title: "音とインタラクション",
        description: "音を使った表現の基礎。AudioSourceの基本、効果音とBGMの設定、操作や接触に応じて音を再生する。",
        slides: [
          { label: "第8回 音とインタラクション スライド", url: "slides/game1_week08.html" }
        ],
        project: [
          { label: "Unityプロジェクト", url: "https://github.com/MasahiroFushida/game1_f/archive/refs/heads/main.zip" }
        ],
        assignment: "【必修課題】Stage6-1 を再現しよう（最小ライン）\n\nスペースキーでジャンプし、同時にジャンプ音が鳴るシーンを作ろう。\nスクリプトはスライド掲載のコードをそのままコピーして使ってOKです。\n\n■ 手順\n1. 新しいシーンを作成し、Plane（地面）を配置する\n2. Player用のCubeを配置し、Rigidbodyを追加する\n3. Assets内に「Audio」フォルダを作り、ジャンプ.mp3 を入れる\n   （好きなフリー素材サイトの音を使ってもOK）\n4. Player に AudioSource を追加し、AudioClip 欄にジャンプ.mp3 をドラッグする\n   ・Play On Awake は OFF、Loop も OFF にする\n5. C#スクリプト「Player」を作成し、スライドのコードをコピーしてPlayerにアタッチする\n6. Playモードで実行し、スペースキーでジャンプ＋ジャンプ音が鳴ることを確認する\n\n■ 提出物（必修）\n・Game ビューのスクリーンショット 1枚\n・Player.cs 1ファイル\n\n──────────────────────────────\n\n【応用課題（任意）】余力がある人だけ\n\n● 応用A：BGM を追加する\n  ・空オブジェクト「BGM」を作って AudioSource を追加\n  ・hiphop2.mp3（または好きなフリーBGM）を AudioClip にセット\n  ・Play On Awake と Loop を ON にして自動で BGM が流れることを確認\n\n● 応用B：左右移動を追加する（Stage6-4）\n  ・C#スクリプト「Player_6_4」を作成し、スライドのコードを参考に\n    矢印キー←→ で左右に Translate する処理を追加する\n\n● 応用C：1秒ごとに Cube を生成する（Stage6-7）\n  ・Cube を Prefab 化する\n  ・空オブジェクト「SpawnManager」を作成\n  ・C#スクリプト「SpawnManager_6_7」を作成し、スライドのコードを参考に\n    Time.deltaTime のタイマーで1秒ごとに Cube をランダム位置に Instantiate する\n\n応用課題に挑戦した場合は、追加で .cs ファイルを提出してください。",
        deadline: "第9回授業開始時"
      },
      {
        week: 9,
        title: "アセットとアニメーション",
        description: "Asset Store の素材でシーンをつくり、動きで表現する。乗り物の操作（AddRelativeForce・Rotate）、Animation ウィンドウとキーフレーム、Animator の状態遷移を学ぶ。",
        slides: [
          { label: "第9回 アセットとアニメーション スライド", url: "slides/game1_week09.html" }
        ],
        project: [
          { label: "Unityプロジェクト", url: "https://github.com/MasahiroFushida/game1_g/archive/refs/heads/main.zip" }
        ],
        assignment: "【必修課題】Asset Store の体験 ＋ はじめてのアニメーション（最小ライン）\n\nこの回は「素材を取り込む体験」と「Animation で物を動かす体験」が必修です。必修にスクリプトはありません。\n\n──────────────────────────────\n\n■ 必修① Asset Store から好きな無料素材を取得して置く（Stage1）\n※ アセットは「Free（無料）」のものなら何でもOK。下の Nature Pack でなくても構いません。\n1. Unity の Window メニュー → Asset Store を開く（案内に従ってブラウザで開く）。または直接ブラウザで assetstore.unity.com を開く\n2. 価格を「Free」で絞り込み、好きな素材のページを開いて Unity ID でログインする\n   （例：Low Poly Simple Nature Pack）\n   https://assetstore.unity.com/packages/3d/environments/landscapes/low-poly-simple-nature-pack-162153\n3. 「マイアセットに追加」→「Unityで開く」をクリックする\n4. Unity で Window → Package Manager を開き、左上を「My Assets」に切り替える\n5. 取得した素材を選び、Download → Import する\n6. Prefab を Scene にドラッグして、3つ以上置いてみる\n\n■ 必修② Animation で Cube を回す（Stage3）\n1. 新しいシーンに Cube を1つ配置する\n2. Cube を選択した状態で Window → Animation → Animation を開く\n3. Create を押し、クリップ名を「CubeRotate」にして保存する\n4. 録画ボタン（●）を押し、0秒の位置で Rotation を 0, 0, 0 にする\n5. 1秒の位置に進めて Rotation を 0, 360, 0 に変える（自動でキーフレームが打たれる）\n6. 録画を止め、Project で CubeRotate クリップを選び、Inspector の Loop Time にチェックを入れる\n7. Play して Cube がずっと回り続けることを確認する\n\n■ 提出物（必修）\n・素材を置いた Scene ビューのスクリーンショット 1枚（必修①）\n・Cube が回っている Game ビュー ＋ Animation ウィンドウが見えるスクリーンショット 1枚（必修②）\n\n──────────────────────────────\n\n【応用課題（任意）】余力がある人だけ\n\n● 応用A：乗り物を走らせる（Stage2）\n  ・Plane と Player（Cube）を置き、Player に Rigidbody を追加する\n  ・C#スクリプト「Player」を作成し、スライドのコードをコピーしてアタッチする\n  ・Inspector の Speed を 1.2 などに設定する\n  ・スペースで前進、←→で旋回できることを確認する\n  ・Simple Cars Pack を取得して、Cube を車のモデルに差し替えてみる\n    https://assetstore.unity.com/packages/3d/vehicles/land/simple-cars-pack-97669\n\n● 応用B：拡大縮小アニメも作る（Stage4）\n  ・別の Cube に、Scale を大きく→小さくする「CubeScale」アニメを作る\n  ・回転と拡大縮小の2種類のアニメを並べて動かす\n\n● 応用C：Animator で状態を切り替える（Stage5）\n  ・Cube に「CubeIdle（待機）」と「CubeJump（ジャンプ）」の2つのアニメを作る\n  ・Animator で JumpTrigger という Trigger パラメータを作り、Idle → Jump の矢印（Transition）の条件に設定する\n  ・C#スクリプト「CubeJump」を作成し、スライドのコードをコピーしてアタッチする\n  ・スペースキーでジャンプアニメが再生されることを確認する\n\n応用課題に挑戦した場合は、追加で .cs ファイル（Player.cs / CubeJump.cs）やスクリーンショットを提出してください。",
        deadline: "第10回授業開始時"
      },
      {
        week: 10,
        title: "フラグとパーティクル",
        description: "true/false で状態を管理する「フラグ」の使い方を学ぶ。パワーアップ（powerup）・接地判定（isGround）・アイテム取得という3つの例でフラグを使い分け、後半はパーティクルシステムで噴水・爆発のエフェクトを作る。",
        slides: [
          { label: "第10回 フラグとパーティクル スライド", url: "slides/game1_week10.html" }
        ],
        project: [
          { label: "Unityプロジェクト", url: "https://github.com/MasahiroFushida/game1_h/archive/refs/heads/main.zip" }
        ],
        assignment: "【課題】フラグの問題とパーティクルの問題を1つずつ\n\n学んだことを使って「自分で作る」課題です。\n配布プロジェクト（game1_h）を使っても、新しいシーンを作ってもOKです。\n\n──────────────────────────────\n\n■ 問題1（フラグ）スイッチを自分で作る\nスペースキーを押すたびに ON／OFF が切りかわるフラグを作り、ON のときだけ何かが起きるようにしよう。\n\n1. Cube を1つ置き、新しい C# スクリプトを作ってアタッチする\n2. 自分で bool のフラグを1つ用意する（例：public bool isOn = false;）\n3. Update() の中で、スペースキーを押すたびにフラグを反対にする\n     if (Input.GetKeyDown(KeyCode.Space)) { isOn = !isOn; }\n4. フラグが ON のときだけ起きることを、自分で1つ決めて書く\n   （例：isOn が true のとき Cube を回す  transform.Rotate(0, 1, 0); ／色を変える など）\n5. Playモードで、スペースを押すたびに動き出す・止まる が切りかわれば成功\n\n■ 問題2（パーティクル）自分のエフェクトを1つ作る\n授業の噴水とは別に、自分で Particle System を作って好きなエフェクトを1つ仕上げよう。\n\n1. 空の GameObject を作り、Add Component → Particle System を追加する\n2. Start Color（色）・Start Speed（速さ）・Start Size（大きさ）・Shape（形）などを調整して、\n   「炎」「雪」「キラキラ」「魔法」など、何かに見えるエフェクトを1つ作る\n3. 何のエフェクトのつもりか分かるように仕上げる\n\n■ 提出物\n・問題1：作った .cs ファイル ＋ 動いているところが分かる Game ビューのスクリーンショット 1枚\n・問題2：作ったエフェクトのスクリーンショット 1枚 ＋「何のエフェクトか」を一言（例：たき火の炎）",
        deadline: "第11回授業開始時"
      },
      {
        week: 11,
        title: "総合制作準備",
        description: "グループで「操作することで生まれる、新しい音楽体験」を提案・制作する総合制作課題に取り組む。役割分担（サウンド・プログラム・ビジュアル・企画／発表）を決め、この回で企画をまとめる。企画から発表（第11〜15回）までの進め方と制作課題テンプレートを確認する。",
        slides: [
          { label: "第11回 総合制作準備 スライド", url: "slides/game1_week11.html" }
        ],
        project: [
          { label: "制作課題テンプレート（game1_template）", url: "https://github.com/MasahiroFushida/game1_template/archive/refs/heads/main.zip" }
        ],
        assignment: "ゲーム1 制作課題（グループワーク）\n\n「操作することで生まれる、新しい音楽体験の提案」\n\n\n〇聴く音楽から、触れる音楽へ\n\n音楽はこれまで「演奏する人」と「聴く人」に分かれていました。\nしかしゲームエンジンを使うと、プレイヤーの操作そのものが\n音楽を生み出す作品が作れます。\n\nボタンを押す・キャラを動かす・物がぶつかる ―\nその一つひとつが音になり、リズムになり、ハーモニーになる。\n\n「遊ぶこと」と「音楽」が一体になった体験を、\nグループで提案・制作してください。\n\nキーワードは「操作 → 音」。\nプレイヤーが何かすると、必ず音楽的な反応が返ってくる ―\nこれがこの課題の中心です。\n\n\n〇グループ編成と役割\n\n・全員がどれか1つ以上の役割を担当（兼任OK）\n\n  サウンド   … 曲・効果音の選定／自作・録音、音の鳴らし方を設計\n  プログラム … Unity 実装・当たり判定・操作\n  ビジュアル … 素材・アニメ・パーティクルで演出\n  企画／発表 … コンセプト立案・企画書・プレゼン進行\n\n※プログラムが苦手な人は、サウンド・ビジュアル・企画で貢献できます。\n　「全員が手を動かす場所がある」ようにチームで分担しましょう。\n\n\n〇課題の流れ（第11回〜第15回）\n\n1. 企画（第11回）   作品名・コンセプト・役割分担をパワーポイントにまとめる\n2. 実装（第12〜14回） グループで分担して Unity 作品をつくる\n3. 発表（第15回）   グループでプレゼン＋デモを計10分\n\n\n〇成果物\n\n1. 企画書（PowerPoint）… 作品名・コンセプト・操作と音の関係・役割分担\n2. Unity 作品（グループで1本、実際に動くもの）\n3. グループ発表＋デモ（第15回・計10分）\n\n\n〇注意\n・なぜこの音楽体験を提案するのか、理由や根拠を示すこと\n・プレイした人にどんな新しい体験・気持ちが生まれるか（効果・影響）を示すこと\n\n\n〇評価のポイント\n・「操作 → 音」の発想に新しさ・工夫があるか（テーマの達成度）\n・音の使い方にこだわりがあるか\n・全員が役割を持って貢献したか（グループワーク点）\n・発表で「なぜ作ったか」をチームの言葉で説明できているか\n\n\n〇制作のスタート地点（テンプレート）\n・配布の「制作課題テンプレート（game1_template）」を使うと、音の再生・UI・パーティクルなど、これまで学んだ仕組みがひと通り入った雛形からすぐに制作を始められます。\n・テンプレートは使っても使わなくてもOKです。ゼロから新しいプロジェクトを作っても、これまでの自分の課題プロジェクトを発展させても構いません。やりやすい形で進めてください。",
        deadline: "第15回 グループ発表（プレゼン＋デモ 計10分）"
      },
      {
        week: 12,
        title: "総合制作①",
        description: "グループ制作の回。冒頭に各グループ1分ほどで「今考えている企画」（作品名・どんな操作でどんな音が鳴るか・今日つくるところ）を共有してから制作に入る。進め方は各グループに任せ、詰まったら先生を呼ぶ。提出は授業終了時の「進捗メモ」（グループで1通）のみ。",
        slides: [
          { label: "第12回 総合制作① スライド", url: "slides/game1_week12.html" }
        ],
        project: [
          { label: "ARテンプレート（game1_template_ar）", url: "https://github.com/MasahiroFushida/game1_template_ar/archive/refs/heads/main.zip" }
        ],
        assignment: "【提出】進捗メモ（グループで1通だけ・授業終了時）\n\n個人提出はありません。次の5行を書いて、UnityのGameビューのスクリーンショット1枚と一緒に提出してください。\n\n1. 作品名（仮でOK）\n2. 今日できたこと\n3. 次回やること\n4. 困っていること・先生に聞きたいこと（なければ「なし」）\n5. メンバー全員の「今日やったこと」1行ずつ\n\n※評価は「出したか」のみ。内容の質は問いません。スクショは作りかけの画面でOKです。\n※グループ課題全体（企画書・Unity作品・発表）の締切は第15回です。",
        deadline: "進捗メモ：第12回 授業終了時（作品全体は第15回 グループ発表）"
      },
      {
        week: 13,
        title: "総合制作②",
        description: "グループ制作の続き。冒頭に各グループ1分ほどで「今の状況」（作品名・前回までにできたこと・今日やること）を共有してから制作に入る。授業内のどこかで作品を最初から通して動かす「中間チェック」を行い、完成度を高める。新しい機能を入れるのはこの回までが目安。発表に向けて、作品を Mac アプリ（.app）として書き出す「ビルド」の手順も紹介する。提出は授業終了時の「進捗メモ」（グループで1通）のみ。",
        slides: [
          { label: "第13回 総合制作② スライド", url: "slides/game1_week13.html" }
        ],
        project: null,
        assignment: "【提出】進捗メモ（グループで1通だけ・授業終了時）\n\n個人提出はありません。前回と同じ次の5行を書いて、UnityのGameビューのスクリーンショット1枚と一緒に提出してください。\n\n1. 作品名（仮でOK）\n2. 今日できたこと\n3. 次回やること\n4. 困っていること・先生に聞きたいこと（なければ「なし」）\n5. メンバー全員の「今日やったこと」1行ずつ\n\n※評価は「出したか」のみ。内容の質は問いません。スクショは作りかけの画面でOKです。\n※次回 第14回は最後の制作日（仕上げ＋発表準備）。グループ課題全体（企画書・Unity作品・発表）の締切は第15回です。",
        deadline: "進捗メモ：第13回 授業終了時（作品全体は第15回 グループ発表）"
      },
      {
        week: 14,
        title: "総合制作③",
        description: "最後の制作日。冒頭に各グループ1分ほどで「今の状況」を共有してから、残りの制作に集中する。全部は作れなくてもよい前提で「①核となる『操作 → 音』を動かす → ②最初から最後まで通して体験できるようにする → ③余裕があれば音量バランス・見た目を整える」の優先順位で、発表できる形まで作りきる。Mac アプリ（.app）として書き出す「ビルド」の手順を再案内するほか、第15回のグループ発表（プレゼン＋デモ 計10分）に向けて話す内容・分担も決めておく。企画書（PowerPoint）に入れる内容（作品名・コンセプト・操作と音の関係・役割分担）もあらためて確認し、今の作品に合わせて更新する。提出は授業終了時の「進捗メモ」（グループで1通）のみ。",
        slides: [
          { label: "第14回 総合制作③ スライド", url: "slides/game1_week14.html" }
        ],
        project: null,
        assignment: "【提出】進捗メモ（グループで1通だけ・授業終了時）\n\n個人提出はありません。次の5行を書いて、UnityのGameビューのスクリーンショット1枚と一緒に提出してください（進捗メモの提出は今回で最後です）。\n\n1. 作品名\n2. 今日できたこと\n3. 発表で見せたいところ・アピールポイント\n4. 困っていること・先生に聞きたいこと（なければ「なし」）\n5. メンバー全員の「今日やったこと」1行ずつ\n\n※評価は「出したか」のみ。内容の質は問いません。\n※次回 第15回はグループ発表（プレゼン＋デモ 計10分）。企画書（PowerPoint）と Unity 作品の最終提出も第15回です。",
        deadline: "進捗メモ：第14回 授業終了時（作品全体は第15回 グループ発表）"
      },
      {
        week: 15,
        title: "作品発表・まとめ",
        description: "グループ発表会。各グループが「操作することで生まれる、新しい音楽体験」の作品をプレゼン＋デモ計10分で発表し、質疑・コメントを交わす。未完成のところがあっても「ここまで作った」をそのまま発表してOK。企画書（PowerPoint）と Unity 作品の最終提出を行い、春学期全体の振り返りと秋学期（ゲーム2）に向けたまとめをする。",
        slides: [
          { label: "第15回 作品発表・まとめ スライド", url: "slides/game1_week15.html" }
        ],
        project: null,
        assignment: "【最終提出】グループで次のものを提出してください（個人提出はありません）。\n\n1. 企画書（PowerPoint）\n   ・作品名・コンセプト・操作と音の関係・役割分担\n   ・作りながら変わったところは、今の作品に合わせて直した最新版を提出する\n\n2. Unity 作品 ― 次の2つで提出\n   ・プレイ動画：作品を実際に操作している様子を録画したもの（1〜2分くらいでOK。操作 → 音が伝わるよう、音が聞こえる状態で録画する。画面収録（Cmd + Shift + 5）でマイクをオンにして、スピーカーから音を出しながら撮るのが簡単です）\n   ・実行ファイル：ビルドした Mac アプリ（.app）をそのまま提出（ビルドの手順は第13・14回のスライド参照）\n\n※発表＋デモ（計10分）は授業内で実施。これらを提出すると、成果物3つ（企画書／Unity作品／発表＋デモ）がすべてそろいます。",
        deadline: "第15回 当日中（発表＋デモは授業内）"
      }
    ]
  },

  game2: {
    title: "ゲーム2",
    semester: "秋学期",
    description: "ゲーム1で習得した基礎をもとに、Blenderでの3Dモデリングと、UnityのAR（拡張現実）で現実の空間に作品を置く制作に取り組みます。",
    openWeeks: 10,
    weeks: [
      {
        week: 1,
        title: "ガイダンス・ARを動かしてみる",
        description: "秋学期の概要説明と環境づくり。Blenderで3Dモデルを作り、UnityのAR（拡張現実）で現実の空間に置いて音を鳴らす、という秋学期のゴールを共有する。春学期に配布したARテンプレート（game1_template_ar）をUnityで開き、エディター上の仮想の部屋（XR Simulation）で動かしてみる。スマホ実機ビルドに向けた準備（iPhoneはXcode、AndroidはUnityのAndroid Build Support）を始める。Blenderのインストールは第6回に行う。",
        slides: [
          { label: "第1回 ガイダンス・ARを動かしてみる スライド", url: "slides/game2_week01.html" }
        ],
        project: [
          { label: "ARテンプレート（game1_template_ar）", url: "https://github.com/MasahiroFushida/game1_template_ar/archive/refs/heads/main.zip" }
        ],
        assignment: "【必修】環境確認のスクリーンショット\n\n次のスクリーンショットを1枚提出してください。\n・ARテンプレート（game1_template_ar）を Unity で開き、Playモードで仮想の部屋にキューブを落とした画面\n\n──────────────────────────────\n\n【任意】スマホ実機ビルドの準備（早めに始めておくと第4回が楽です）\n・iPhone の人：Mac の空き容量を 25GB 以上あけておく（Xcode は第2回に配布します。App Store から入れる必要はありません）\n・Android の人：Unity Hub で Unity 2022.3.62f3 に「Android Build Support」（OpenJDK・Android SDK & NDK Tools を含む）を追加する\n終わったら、その画面のスクリーンショットを1枚追加で提出してください（iPhone の人は「この Mac について」でストレージの空きが見えている画面）。",
        deadline: "第2回授業開始時"
      },
      {
        week: 2,
        title: "ARの仕組みとAR Foundation",
        description: "ARがどうやって現実の空間を認識しているか（カメラ・平面検出・トラッキング）を学ぶ。ARテンプレートのシーン構成（AR Session・XR Origin・AR Plane Manager・AR Raycast Manager）を読み解き、検出した平面の見た目を変えてみる。仮想の部屋の歩き方（W/A/S/D・矢印キー）も確認する。後半は自分のスマホで AR を動かすところまで。手順書PDFを2つ配布し、iPhone は配布の Xcode・Unity の iOS Build Support・Apple Account 登録・デベロッパモード、Android は Android Build Support・開発者向けオプション（USB デバッグ）・Google Play 開発者サービス（AR）を整えたうえで、iPhone は Unity から書き出して Xcode で署名・実行、Android は Build And Run でインストールし、実際の机や床に面を出してキューブを落とすところまで確認する。",
        slides: [
          { label: "第2回 ARの仕組みとAR Foundation スライド", url: "slides/game2_week02.html" }
        ],
        project: [
          { label: "ARテンプレート（game1_template_ar）", url: "https://github.com/MasahiroFushida/game1_template_ar/archive/refs/heads/main.zip" }
        ],
        documents: [
          { label: "① Android端末へのUnityアプリ導入 & 画面ミラーリング手順（Mac）［PDF］", url: "files/game2_android_build_and_run.pdf" },
          { label: "② Xcode環境構築 & UnityからiPhoneへのビルド手順［PDF］", url: "files/game2_xcode_setup.pdf" },
          { label: "Xcode 16.4（macOS 15.3 以降の人）― Apple 開発者サイト［要 Apple ID・約3GB］", url: "https://developer.apple.com/download/all/?q=xcode%2016.4" },
          { label: "Xcode 26.5（macOS 26.5 以降の人）― Apple 開発者サイト［要 Apple ID・約2.3GB］", url: "https://developer.apple.com/download/all/?q=xcode%2026.5" }
        ],
        assignment: "自分のスマホに AR アプリを入れて、動いているところのスクリーンショットを1枚提出してください。\n\n・机や床に面が出ている画面、またはキューブが見えている画面\n\n※うまくいかなかった人は、止まったところの画面を1枚でOK。スマホを使わない人はその旨をひとこと。評価は変わりません。\n\n手順は授業スライドと、上の【配布資料・ダウンロード】の手順書PDFを見てください。",
        deadline: "第3回授業開始時"
      },
      {
        week: 3,
        title: "AR開発環境を整える（AR Mobile テンプレート）",
        slides: [
          { label: "第3回 AR開発環境を整える スライド", url: "slides/game2_week03.html" }
        ],
        project: [
          { label: "Unityプロジェクト（game2_a）", url: "https://github.com/MasahiroFushida/game2_a/archive/refs/heads/main.zip" }
        ],
        assignment: "スマホの画面で、自分が置いたオブジェクトが出ている様子のキャプチャ（スクリーンショット）を1枚提出してください。\n\n※うまくいかなかった人は、Unity の画面のキャプチャを送ってください。スマホを使わない人はその旨をひとこと。評価は変わりません。",
        deadline: "第4回授業開始時"
      },
      {
        week: 4,
        title: "スキャンしたモノに音をつけて、ARで出す（Scaniverse）",
        slides: [
          { label: "第4回 スキャンしたモノに音をつけて、ARで出す スライド", url: "slides/game2_week04.html" }
        ],
        project: [
          { label: "Unityプロジェクト（game2_b：第4回の完成形。Stage4 に OrbitSound、Stage5 に SwingSound）", url: "https://github.com/MasahiroFushida/game2_b/archive/refs/heads/main.zip" },
          { label: "Unityプロジェクト（game2_a：第3回の配布）", url: "https://github.com/MasahiroFushida/game2_a/archive/refs/heads/main.zip" }
        ],
        documents: [
          { label: "Scaniverse（iPhone）― App Store［無料］", url: "https://apps.apple.com/jp/app/scaniverse-3d-scanner/id1541433223" },
          { label: "Scaniverse（Android）― Google Play［無料］", url: "https://play.google.com/store/apps/details?id=com.nianticlabs.scaniverse&hl=ja" }
        ],
        assignment: "スマホの画面で、スキャンしたモノが出ている様子のキャプチャ（スクリーンショット）を1枚提出してください。\n\n※うまくいかなかった人は、Unity の画面のキャプチャを送ってください。スマホを使わない人はその旨をひとこと。評価は変わりません。",
        deadline: "第5回授業開始時"
      },
      {
        week: 5,
        title: "スキャンしたモノに音をつけて動かす・タップで鳴らす",
        slides: [
          { label: "第5回 スキャンしたモノに音をつけて動かす・タップで鳴らす スライド", url: "slides/game2_week05.html" }
        ],
        project: [
          { label: "Unityプロジェクト（game2_c：第5回の完成形。Stage3 に音、Stage4 に OrbitSound、Stage6 に TapSound。Assets/sound にループ音とタップ音 impact.wav）", url: "https://github.com/MasahiroFushida/game2_c/archive/refs/heads/main.zip" }
        ],
        assignment: "スキャンしたモノが自分のまわりを回りながら音が鳴っている様子の画面録画（10〜30秒）を1つ提出してください。\n\n・スマホの画面収録でも、Unity の Game ビュー（XR Simulation）の画面収録でも OK（Mac は Cmd + Shift + 5、オプションでマイクをオンにすると音が入ります）\n・タップで鳴らすところまでできた人は、タップして鳴る様子も同じ録画に入れてください\n\n※動かすところまでいかなかった人は、置いたモノから音が鳴っているだけで OK。うまくいかなかった人は、止まったところの画面のキャプチャを1枚。スマホを使わない人は XR Simulation で OK。評価は変わりません。",
        deadline: "第6回授業開始時"
      },
      {
        week: 6,
        title: "Blender入門",
        description: "3Dモデリングソフト Blender のインストール（blender.org から。授業内で行う）と基本操作。画面構成、視点の動かし方（Macのトラックパッド／マウス）、オブジェクトの追加、移動（G）・回転（R）・拡大縮小（S）、保存。プリミティブ（立方体・球・円柱など）を組み合わせて、簡単な形をつくる。",
        slides: [
          { label: "第6回 Blender入門 スライド", url: "slides/game2_week06.html" }
        ],
        project: null,
        documents: [
          { label: "Blender ダウンロード（5.2 LTS：Windows、Apple シリコン Mac・macOS 13 以上の人）― blender.org", url: "https://www.blender.org/download/" },
          { label: "Blender 4.5 LTS（Intel Mac・macOS 12 以前の人）― blender.org", url: "https://www.blender.org/download/lts/4-5/" },
          { label: "作例：雪だるま（.blend ファイル。開いて中を見てみる用）", url: "files/game2_week06_snowman.blend" },
          { label: "雪だるまの作り方 動画（mp4・メニューとツールバーで・テロップ付き・約2分）", url: "files/game2_week06_snowman_howto.mp4" },
          { label: "G・S・R をトラックパッドで動かす 動画（mp4・テロップと操作キー付き・40秒）", url: "files/game2_week06_grs_mouse.mp4" },
          { label: "マテリアルで色をつける 動画（mp4・テロップ付き・40秒）", url: "files/game2_week06_color_howto.mp4" },
          { label: "視点を動かす 動画（mp4・テロップ付き・60秒。モンキーを出すところから）", url: "files/game2_week06_view_howto.mp4" },
          { label: "選ぶ・足す・消す 動画（mp4・テロップ付き・50秒）", url: "files/game2_week06_select_howto.mp4" },
          { label: "最初の設定（プリファレンス）動画（mp4・テロップ付き・35秒）", url: "files/game2_week06_prefs_howto.mp4" },
          { label: "3D カーソル 動画（mp4・テロップ付き・50秒）", url: "files/game2_week06_cursor_howto.mp4" },
          { label: "丸いすの作り方 動画（mp4・テロップ付き・100秒。ツールバーとギズモで）", url: "files/game2_week06_stool_howto.mp4" },
          { label: "よく使うショートカット一覧（PDF・A4 1枚。Mac 表記、Windows の読みかえ付き）", url: "files/game2_week06_shortcuts.pdf" },
        ],
        assignment: "【必修】プリミティブで動物を1体作ろう\n\nBlender のプリミティブ（立方体・球・円柱・円錐 など）を組み合わせて、好きな動物を1体作ってください（例：ペンギン、ネコ、クマ、ウサギ、魚、鳥）。授業で作った雪だるまと同じやり方です。\n\n■ 条件\n・プリミティブを5個以上使う\n・移動（G）・回転（R）・拡大縮小（S）をそれぞれ1回以上使う\n\n■ 提出物\n・Blender の画面のスクリーンショット1枚\n\n──────────────────────────────\n\n【任意】色をつける\n・マテリアルプロパティで新規マテリアルを作り、Base Color で色をつける",
        deadline: "第7回授業開始時"
      },
      {
        week: 7,
        title: "Blenderモデリング①（編集モード）",
        description: "編集モードで形を作り込む。Tab でオブジェクトモードと編集モードを切り替え、頂点・辺・面を選ぶ。押し出し（E）、ループカット（Cmd + R）、面の差し込み（I）、ベベル（Cmd + B）。プリミティブを削ったり伸ばしたりして、鍵盤・太鼓・スピーカーなど「ARで置きたい、音の出るモノ」の形に近づける。",
        slides: [
          { label: "第7回 Blenderモデリング①（編集モード） スライド", url: "slides/game2_week07.html" }
        ],
        project: null,
        documents: [
          { label: "作例：鍵盤（.blend ファイル。「やってみよう」の完成形）", url: "files/game2_week07_keyboard.blend" },
          { label: "作例：太鼓（.blend ファイル。「作ってみよう」の完成形）", url: "files/game2_week07_drum.blend" },
          { label: "作例：スピーカー（.blend ファイル。発展の完成形）", url: "files/game2_week07_speaker.blend" },
          { label: "鍵盤の作り方 動画（mp4・ツールバーとメニューで・テロップと操作キー付き・65秒）", url: "files/game2_week07_keys_howto.mp4" },
          { label: "太鼓の作り方 動画（mp4・ツールバーとメニューで、( ) にショートカット・テロップと操作キー付き・72秒）", url: "files/game2_week07_drum_howto.mp4" },
          { label: "押し出し（E）動画（mp4・ショートカットとツールの両方・テロップ付き・20秒）", url: "files/game2_week07_extrude.mp4" },
          { label: "ループカット（Cmd + R）動画（mp4・ショートカットとツールの両方・テロップ付き・23秒）", url: "files/game2_week07_loopcut.mp4" },
          { label: "面の差し込み（I）動画（mp4・ショートカットとツールの両方・テロップ付き・20秒）", url: "files/game2_week07_inset.mp4" },
          { label: "ベベル（Cmd + B）動画（mp4・ショートカットとツールの両方・テロップ付き・22秒）", url: "files/game2_week07_bevel.mp4" },
          { label: "スピーカーの作り方 動画（発展：面の差し込み＋ベベル。mp4・ツールバーとメニューで、( ) にショートカット・テロップと操作キー付き・82秒）", url: "files/game2_week07_speaker_howto.mp4" },
          { label: "おまけ：色を塗る 動画（鍵盤を白と黒に。マテリアル → 新規 → ベースカラー → 2 つ目のマテリアルを割り当て。mp4・テロップ付き・58秒）", url: "files/game2_week07_color_howto.mp4" },
          { label: "編集モードのショートカット一覧（PDF・A4 1枚。Mac 表記、Windows の読みかえ付き）", url: "files/game2_week07_shortcuts.pdf" },
        ],
        assignment: "【必修】押し出しとループカットで形を作ろう\n\n編集モードを使って、1つのプリミティブから「音の出るモノ」を1つ作ってください（例：立方体からスピーカー、立方体から鍵盤ハーモニカ、円柱からマグカップ、立方体からラジカセ）。授業で作ったスピーカーと同じやり方です。\n\n■ 条件\n・押し出し（E）とループカット（Cmd + R）を両方使う\n\n■ 提出物\n・Blender の画面のスクリーンショット1枚（編集モードのままでも、オブジェクトモードでもOK）\n\n──────────────────────────────\n\n【任意】\n・面の差し込み（I）でへこみや枠をつける\n・ベベル（Cmd + B）で角を丸める",
        deadline: "第8回授業開始時"
      },
      {
        week: 8,
        title: "Blenderモデリング②（モディファイア・マテリアル）",
        description: "モディファイアで効率よく形を作る。ミラー（左右対称）、サブディビジョンサーフェス（なめらかにする）、配列（同じ形を並べる）。マテリアルで色・金属感・つやをつける（プリンシプルBSDF の ベースカラー・メタリック・粗さ）。UV展開は扱わず、色ベースで仕上げる。Blender はこの回まで。",
        slides: [
          { label: "第8回 Blenderモデリング②（モディファイア・マテリアル） スライド", url: "slides/game2_week08.html" }
        ],
        project: null,
        documents: [
          { label: "作例：木琴（.blend ファイル。「やってみよう」の完成形）", url: "files/game2_week08_xylophone.blend" },
          { label: "作例：スピーカー（色つき・2 台）（.blend ファイル。「作ってみよう」の完成形）", url: "files/game2_week08_speaker_color.blend" },
          { label: "作例：ヘッドホン（.blend ファイル。発展の完成形）", url: "files/game2_week08_headphone.blend" },
          { label: "作例：カホン（箱を 2 色に分けた例）（.blend ファイル。「マテリアル」のページの例）", url: "files/game2_week08_cajon.blend" },
          { label: "木琴の作り方 動画（配列 ＋ ミラー ＋ 2 色。mp4・テロップと操作キー付き・104秒）", url: "files/game2_week08_xylo_howto.mp4" },
          { label: "スピーカーを 0 から作って仕上げる 動画（箱 → ループカット → 面の差し込み・押し出し → ベベル → ミラーで 2 台 → 2 色。mp4・テロップと操作キー付き・92秒）", url: "files/game2_week08_speaker_howto.mp4" },
          { label: "ミラー 動画（mp4・テロップ付き・27秒）", url: "files/game2_week08_mirror.mp4" },
          { label: "サブディビジョンサーフェス 動画（mp4・テロップ付き・24秒）", url: "files/game2_week08_subsurf.mp4" },
          { label: "配列 動画（mp4・テロップ付き・40秒）", url: "files/game2_week08_array.mp4" },
          { label: "箱を 0 から作って 2 色に分ける 動画（カホン：立方体 → 新規 → ベースカラー → Tab → 前の面 → ＋ → 新規 → 割り当て。mp4・テロップと操作キー付き・48秒）", url: "files/game2_week08_color_howto.mp4" },
          { label: "マテリアル（ベースカラー・メタリック・粗さ）動画（mp4・テロップ付き・42秒）", url: "files/game2_week08_material.mp4" },
          { label: "ヘッドホンの作り方 動画（発展：ミラー ＋ サブディビジョン ＋ 複製でクッション ＋ トーラスの下半分を消してバンド ＋ 金属。mp4・テロップと操作キー付き・121秒）", url: "files/game2_week08_headphone_howto.mp4" },
          { label: "モディファイア・マテリアルの早見表（PDF・A4 1枚。Mac 表記、Windows の読みかえ付き）", url: "files/game2_week08_shortcuts.pdf" },
        ],
        assignment: "【必修】モディファイアと色で仕上げよう\n\n第7回のモデル（または新しく作ったモデル）に、モディファイアとマテリアルを加えてください。授業で 0 から作ったスピーカーと同じやり方です。\n\n■ 条件\n・ミラー・サブディビジョンサーフェス・配列のうち、1つ以上を使う\n・マテリアルを2色以上つける（パーツごとに色を分ける）\n\n■ 提出物\n・Blender の画面のスクリーンショット1枚（マテリアルプレビュー表示にして）\n\n──────────────────────────────\n\n【任意】\n・メタリック や 粗さ を変えて、金属や光沢を表現する\n・ヘッドホン（ミラー ＋ サブディビジョン ＋ 複製 ＋ 金属）を作ってみる",
        deadline: "第9回授業開始時"
      },
      {
        week: 9,
        title: "BlenderからUnityへ（FBX書き出し）",
        description: "第8回の宿題で作ったBlenderのモデルをUnityに持っていく。FBXでの書き出し（スケール・軸の設定）、Unityへのインポート、マテリアルの取り出し（Extract Materials）と色の再設定、Prefab化。Unityの 1 = 1m を意識して、現実に置いたときの大きさを整える。最後に、スマホ（または XR Simulation）で AR に出力する。",
        slides: [
          { label: "第9回 BlenderからUnityへ（FBX書き出し） スライド", url: "slides/game2_week09.html" }
        ],
        project: [
          { label: "Unityプロジェクト（game2_c：第5回の完成形。第9回はこの Stage6 に自作モデルを入れる）", url: "https://github.com/MasahiroFushida/game2_c/archive/refs/heads/main.zip" }
        ],
        documents: [
          { label: "作例：スピーカー（.fbx。授業で Unity に入れたもの。Blender のモデルが無い人はこれで OK）", url: "files/game2_week09_speaker.fbx" },
          { label: "作例：木琴（.fbx。第8回の木琴を書き出したもの）", url: "files/game2_week09_xylophone.fbx" },
          { label: "作例：ヘッドホン（.fbx。第8回のヘッドホン。バンドは Unity で Metallic 1 に）", url: "files/game2_week09_headphone.fbx" },
          { label: "作例：カホン（.fbx。第8回のカホン）", url: "files/game2_week09_cajon.fbx" },
          { label: "FBX 書き出し 動画（ファイル → エクスポート → FBX → メッシュだけ → トランスフォームを適用 → 名前 → エクスポート。mp4・テロップと操作付き・30秒）", url: "files/game2_week09_fbx_howto.mp4" },
          { label: "完成形 動画（Play → XR Simulation の部屋に 50 cm のスピーカーと木琴・ヘッドホン・カホンが置いてある。mp4・25秒）", url: "files/game2_week09_goal_room.mp4" },
          { label: "Blender → Unity 早見表（PDF・A4 1枚。書き出し・取り込み・持っていけるもの）", url: "files/game2_week09_fbx_unity.pdf" },
        ],
        assignment: "【必修】Blender で作成したモデルを AR で出力しよう\n\n■ 手順\n1. Blender：ファイル → エクスポート → FBX（「メッシュ」だけ・「トランスフォームを適用」にチェック）\n2. Unity：Models フォルダに .fbx を入れる\n3. 本物の大きさに合わせる（Model タブ → Scale Factor → Apply）\n4. 色を取り出す（Materials タブ → Extract Materials…）\n5. Hierarchy に置いて、Prefab にする\n6. AR で出力する（スマホに書き出す。使わない人は ▶ Play で OK）\n\n■ 提出物\n・AR で出力した画面のスクリーンショット 1 枚\n\n※ モデルが間に合わない人は、配布の作例（speaker.fbx）で OK\n\n──────────────────────────────\n\n【任意】\n・音を付けて、立体音響にする（スライド 16 ページ）\n・指で動かす・大きさを変える（スライド 17 ページ）\n・ほかのモデルも入れる・金属にする",
        deadline: "第10回授業開始時"
      },
      {
        week: 10,
        title: "作品の構想",
        description: "最終作品（制作課題）の構想を、チームでまとめる回。テーマは「現実に重ねることで生まれる、新しい音楽体験の提案」（キーワードは「場所 × 音」）。2 つのチームに分かれ、1 チームは「AR を使ったミュージックビデオ」、もう 1 チームは「インタラクティブな AR 作品」を作る。参考作品を見てから、チームで構想を立てる。進め方の例として、広げる（アイデアスケッチ）・しぼる（場所・ひとこと・ねらい・ルール・トーン）・組み立てる（MV チームは絵コンテ、インタラクティブ チームは体験の流れ）・計画する（最初の試作と役割）の 4 ステップを紹介するが、この通りに進めなくてよい。まとめた構想は、次の第11回にパワーポイントで発表する。",
        slides: [
          { label: "第10回 作品の構想 スライド", url: "slides/game2_week10.html" }
        ],
        project: null,
        documents: [
          { label: "アイデアスケッチ（書籍の公式ページ。用紙のテンプレートあり）", url: "https://www.iamas.ac.jp/idea_sketch/" },
        ],
        assignment: "ゲーム2 制作課題（チーム制作）\n\n「現実に重ねることで生まれる、新しい音楽体験の提案」\n\n\n〇画面の中の音楽から、その場所にある音楽へ\n\n春学期は、画面の中で「操作 → 音」の作品を作りました。\n秋学期は、音楽を現実の場所に重ねます。\n\nスマホをかざすと、いつもの教室や廊下、自分の部屋が、\n音楽で書きかわる。\n\n「その場所だからこそ成り立つ音楽体験」を、\nチームで提案・制作してください。\n\nキーワードは「場所 × 音」。\n\n\n〇2 つのチーム\n・MV チーム：AR を使ったミュージックビデオ（見る作品）\n・インタラクティブ チーム：インタラクティブな AR 作品（体験する作品）\n\n\n〇どちらのチームも共通\n・場所を決めて、AR でそこに出す\n・Blender で作ったモデルを 1 つ以上使う\n・音・音楽を中心にする\n\n\n〇構想で必ず示すこと\n・なぜ、その場所か\n・見た人・体験した人に、その場所がどう変わって見えるか・聞こえるか\n\n\n【今回の課題】構想をパワーポイントにまとめて、第11回に発表する（チームで 1 つ）\n\n■ パワーポイントに入れること（5 枚くらい）\n1. 作品名（仮で OK）とひとこと、チームのメンバー\n2. 場所（なぜそこ？）とねらい（その場所がどう変わる？）\n3. 出てくるモノと音\n4. MV チーム：絵コンテ（3〜5 カット）／インタラクティブ チーム：体験の流れ（◯◯すると → △△が起きる）\n5. 役割と、作る順番（最初に作るもの → 次に足すもの）\n※ 入れてもよい：ルールとトーン、アイデアスケッチの写真\n\n■ 提出と発表\n・第11回の授業の始めに、パワーポイントのファイルを提出する\n・第11回に、それを映して発表する（各チーム 5 分）。相手チームと先生から、コメントをもらう\n\n※ スライドにある進め方（広げる・しぼる・組み立てる・計画する）は参考です。チームのやりやすい方法で進めてください。\n※ 構想は、作りながら変えて OK",
        deadline: "第11回授業開始時（第11回に構想発表）"
      },
      {
        week: 11,
        title: "構想発表・総合制作①",
        description: "構想発表の回。各チームがパワーポイントで、5 分ほど構想を発表する（作品名とひとこと・場所とねらい・出てくるモノと音・絵コンテ または 体験の流れ・最初に作るもの）。相手チームと先生から、コメント（よかったところ・分からなかったところ・こうするともっとよい）をもらう。発表のあとは、コメントを受けて構想を直し、最初の試作（最小ライン）に取りかかる（MV チーム：1 カット・30 秒を撮る ／ インタラクティブ チーム：モデルを 1 つ置いて、タップすると音が鳴る）。Blender でのモデル制作、音づくり、Unity での AR 実装を分担して進める。提出は授業終了時の「進捗メモ」（チームで 1 通）のみ。",
        slides: null,
        project: null,
        assignment: "【提出】進捗メモ（チームで 1 通だけ・授業終了時）\n\n個人提出はありません。次の 6 行を書いて、作業中の画面のスクリーンショット 1 枚（Blender でも Unity でも可）と一緒に提出してください。\n\n1. 作品名（仮で OK）\n2. 構想発表でもらったコメントと、直したところ\n3. 今日できたこと\n4. 次回やること\n5. 困っていること・先生に聞きたいこと（なければ「なし」）\n6. メンバー全員の「今日やったこと」1 行ずつ\n\n※ 評価は「出したか」のみ。内容の質は問いません。スクショは作りかけの画面で OK です。\n※ 作品全体の締切は第15回です。",
        deadline: "進捗メモ：第11回 授業終了時（作品全体は第15回 発表）"
      },
      {
        week: 12,
        title: "総合制作②（最小ラインを動かす）",
        description: "チーム制作の続き。冒頭に各チーム 1 分ほどで「今の状況」（前回までにできたこと・今日やること）を共有してから制作に入る。この回のうちに、構想で決めた最初の試作（最小ライン）を動かす（MV チーム：1 カット・30 秒を撮る ／ インタラクティブ チーム：モデルを 1 つ置いて、タップすると音が鳴る）。動いたチームは「次に足す」に進む（MV チーム：カットを増やす・モデルを動かす ／ インタラクティブ チーム：モノと音を増やす・近づくと変わる）。必要な材料（モデル・スキャン・曲や音）をそろえる。詰まったら先生を呼ぶ。提出は授業終了時の「進捗メモ」（チームで 1 通）のみ。",
        slides: null,
        project: null,
        assignment: "【提出】進捗メモ（チームで 1 通だけ・授業終了時）\n\n個人提出はありません。次の 5 行を書いて、作業中の画面のスクリーンショット 1 枚（Blender でも Unity でも可）と一緒に提出してください。\n\n1. 作品名（仮で OK）\n2. 今日できたこと\n3. 次回やること\n4. 困っていること・先生に聞きたいこと（なければ「なし」）\n5. メンバー全員の「今日やったこと」1 行ずつ\n\n※ 評価は「出したか」のみ。内容の質は問いません。スクショは作りかけの画面で OK です。\n※ 作品全体の締切は第15回です。",
        deadline: "進捗メモ：第12回 授業終了時（作品全体は第15回 発表）"
      },
      {
        week: 13,
        title: "総合制作③（中間チェック）",
        description: "チーム制作の続き。冒頭に各チーム 1 分ほどで「今の状況」を共有してから制作に入る。授業内のどこかで、作品を最初から最後まで通す「中間チェック」をする（MV チーム：撮れているカットをつないで、曲に合わせて通して見る ／ インタラクティブ チーム：ほかのチームや先生に体験してもらう）。新しいことを足すのは、この回までが目安。実機（スマホ）で見せたいチームは、この回までにビルドが通るかを確認しておく。提出は授業終了時の「進捗メモ」（チームで 1 通）のみ。",
        slides: null,
        project: null,
        assignment: "【提出】進捗メモ（チームで 1 通だけ・授業終了時）\n\n次の 5 行と、中間チェックのスクリーンショット 1 枚を提出してください。\n\n1. 作品名\n2. 今日できたこと\n3. 次回やること\n4. 困っていること・先生に聞きたいこと（なければ「なし」）\n5. メンバー全員の「今日やったこと」1 行ずつ\n\n※ 中間チェックで最小ラインまでできていないチームは、次回は「まず最小ラインを仕上げる」を最優先にしてください。",
        deadline: "進捗メモ：第13回 授業終了時（作品全体は第15回 発表）"
      },
      {
        week: 14,
        title: "総合制作④（作りきる・発表準備）",
        description: "最後の制作日。全部は作れなくてもよい前提で「① 最小ラインを仕上げる → ② 見せられる形にする（MV チーム：撮影と編集を終える ／ インタラクティブ チーム：体験している様子の動画を撮る）→ ③ 余った時間で足す」の順に進める。動画の撮り方（実機：スマホの画面収録／XR Simulation：Mac の画面収録 Cmd + Shift + 5）と、発表で話すこと（作品名・ひとことで言うと・なぜその場所・その音か・役割分担）を確認する。提出は授業終了時の「進捗メモ」（チームで 1 通）のみ。",
        slides: null,
        project: null,
        assignment: "【提出】進捗メモ（チームで 1 通だけ・授業終了時）\n\n次の 5 行を書いて提出してください（進捗メモの提出は今回で最後です）。\n\n1. 作品名\n2. 今日できたこと\n3. 発表までにやること\n4. 発表で見せるもの（MV チーム：完成した MV ／ インタラクティブ チーム：実機 または XR Simulation の動画）\n5. メンバー全員の「今日やったこと」1 行ずつ\n\n※ 次回は発表です。動画は発表前に用意しておいてください（発表中に初めて動かすと、うまくいかないことが多いです）。",
        deadline: "進捗メモ：第14回 授業終了時（作品全体は第15回 発表）"
      },
      {
        week: 15,
        title: "作品発表・まとめ",
        description: "発表会。2 つのチームが作品を見せながら（MV チームは MV の上映、インタラクティブ チームは実演 または 体験の動画）、作品名・ひとことで言うと・なぜその場所・その音か・作ってみてどうだったかを話す。未完成のところがあっても「ここまで作った」をそのまま発表して OK。パワーポイントと作品の最終提出を行い、秋学期とゲーム1・2全体を振り返る。",
        slides: null,
        project: null,
        assignment: "【最終提出】チームで次のものを提出してください（個人提出はありません）。\n\n1. パワーポイント（最新版）\n   ・作りながら変わったところは、今の作品に合わせて直したものを提出する\n\n2. 作品\n   ・MV チーム：完成した MV（動画ファイル）\n   ・インタラクティブ チーム：体験している様子の動画（30秒〜1分。音が聞こえる状態で。実機ならスマホの画面収録、XR Simulation なら Mac の画面収録 Cmd + Shift + 5 でマイクをオンにして撮る）\n\n※発表は授業内で実施します。最後に出すものは、パワーポイントと作品の 2 つです。",
        deadline: "第15回 当日中（発表は授業内）"
      }
    ]
  }
};
