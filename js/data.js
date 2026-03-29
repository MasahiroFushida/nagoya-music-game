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
        assignment: null,
        deadline: null
      },
      {
        week: 2,
        title: "Unityの基本操作",
        description: "Unityエディターの説明と基本操作。Scene・Game・Hierarchy・Inspectorビューの使い方、オブジェクトの配置と保存。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 3,
        title: "Unityの基礎①",
        description: "C#でコードを書いてみる。スクリプトの作成方法、Debug.Logの使い方、Playモードで動作確認。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 4,
        title: "Unityの基礎②",
        description: "オブジェクトを動かしてみる。Transformの基本（位置・回転・拡大縮小の制御）、キーボード入力で移動する処理。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 5,
        title: "Unityの基礎③",
        description: "Prefabの概念を学ぶ。オブジェクトの再利用方法・複製と管理、簡単なステージを作成する。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
      },
      {
        week: 6,
        title: "UIの基礎",
        description: "UIの作成方法。Text・Button・Imageの配置、Canvasの役割、ボタン操作で画面表示を変える。",
        slides: null,
        project: null,
        assignment: null,
        deadline: null
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
