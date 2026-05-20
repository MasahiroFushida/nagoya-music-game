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
          { label: "Unityプロジェクト", url: "https://github.com/MasahiroFushida/game1_a.git" }
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
          { label: "Unityプロジェクト", url: "https://github.com/MasahiroFushida/game1_b.git" }
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
          { label: "Unityプロジェクト", url: "https://github.com/MasahiroFushida/game1_c.git" }
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
          { label: "Unityプロジェクト", url: "https://github.com/MasahiroFushida/game1_d.git" }
        ],
        assignment: "【課題】Sキーで増えるスコア表示を作ろう\n\nSキーを押すたびにスコアが1ずつ増え、Canvas上のTextに反映されるシーンを作ろう。\n\n■ 手順\n1. 新しいシーンを作成し、Hierarchy 右クリック → UI → Text - Legacy で Text を1つ配置する\n   ・自動で Canvas と EventSystem も生成されることを確認する\n   ・Text オブジェクトの名前を「Score」に変更する\n   ・Inspector の Text 欄に「Score: 0」と入力し、Font Size を 40 程度に大きくする\n2. C# スクリプト「ScoreUI」を新規作成し、以下を実装する\n   ・冒頭に using UnityEngine.UI; を記述する\n   ・private int score; を宣言する\n   ・Text 型の変数 scoreText を宣言する\n   ・Start() で scoreText = GameObject.Find(\"Score\").GetComponent<Text>(); と書く\n   ・Update() の中で Input.GetKeyDown(KeyCode.S) が true のとき、\n       score++;\n       scoreText.text = \"Score: \" + score;\n     の2行を実行する\n3. Hierarchy で空の GameObject（または Cube）を作成し、ScoreUI スクリプトをアタッチする\n4. Playモードで実行し、Sキーを押すたびに画面の Score 表示が増えていくことを確認する\n\n■ 応用課題（任意・できる人だけ）\n・Aキーを押したらスコアが5増えるように if 文を追加する\n・もう1つ Text を配置して「High Score」を表示し、これまでの最大値を表示する\n・Score の Text を TextMeshPro に置き換える（using TMPro; と TextMeshProUGUI への変更）\n\n■ 提出物\n・Game ビューのスクリーンショット（Score が 3 以上になった画面）\n・ScoreUI.cs ファイル",
        deadline: "第7回授業開始時"
      },
      {
        week: 7,
        title: "当たり判定",
        description: "ColliderとRigidbodyの基本。衝突判定の仕組み、トリガーイベントの利用、簡単な接触判定を実装する。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 8,
        title: "音とインタラクション",
        description: "音を使った表現の基礎。AudioSourceの基本、効果音とBGMの設定、操作や接触に応じて音を再生する。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 9,
        title: "ゲーム制作基礎①",
        description: "得点やルールを実装する。変数と条件分岐の基礎、スコア表示の作成、簡単なミニゲーム制作を始める。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 10,
        title: "ゲーム制作基礎②",
        description: "時間制限やゲームオーバー処理を作る。タイマーの実装、クリア条件と失敗条件、ゲーム全体の流れを組み立てる。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 11,
        title: "音と演出の基礎",
        description: "音楽と画面演出の関係を学ぶ。効果音・BGM・アニメーションの利用、タイミングに合わせた演出、作品表現を高める工夫。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 12,
        title: "総合制作①",
        description: "各自で作品制作を進める。音や音楽表現を取り入れた企画を考える。必要な素材や機能の整理、個別に実装を進める。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 13,
        title: "総合制作②",
        description: "作品制作の続き。動作確認と修正、UIや音響演出の調整、完成度を高める。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 14,
        title: "総合制作③",
        description: "作品の仕上げ。不具合修正、発表準備、作品の意図や工夫をまとめる。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 15,
        title: "作品発表・まとめ",
        description: "作品発表会。制作物の共有、音とインタラクション表現の振り返り、授業全体のまとめ。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      }
    ]
  },

  game2: {
    title: "ゲーム2",
    semester: "秋学期",
    description: "ゲーム1で習得した基礎をもとに、より本格的なゲーム制作に取り組みます。",
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
