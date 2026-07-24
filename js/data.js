/**
 * 授業データ
 * ここを編集することで各コマの内容を更新できます。
 *
 * slides:     スライドのURL（配列）。なければ null
 * project:    Unityプロジェクトのダウンロードリンク（配列）。なければ null
 * assignment: 課題の内容（文字列）。なければ null
 * deadline:   課題の締切（文字列）。なければ null
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
    description: "ゲーム1で習得した基礎をもとに、AR（拡張現実）を使った作品制作に取り組みます。",
    weeks: [
      {
        week: 1,
        title: "ガイダンス・ゲーム1の復習",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 2,
        title: "2Dゲームの仕組み",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 3,
        title: "Tilemapを使ったステージ作成",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 4,
        title: "キャラクターの移動とアニメーション",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 5,
        title: "カメラ制御",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 6,
        title: "敵AIの基礎",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 7,
        title: "スコアとゲームオーバー処理",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 8,
        title: "セーブ・ロード機能",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 9,
        title: "エフェクトとパーティクル",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 10,
        title: "WebGLビルドと公開",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 11,
        title: "卒業制作①（企画・仕様書作成）",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 12,
        title: "卒業制作②（実装）",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 13,
        title: "卒業制作③（実装・調整）",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 14,
        title: "卒業制作④（デバッグ・仕上げ）",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 15,
        title: "最終発表・講評",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      }
    ]
  }
};
