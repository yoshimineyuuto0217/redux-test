## Reduxに取り入れる内容

- ログイン情報をredux側で保持させる。
- reduxのre-ducksパターンを調べる。
- redux側の初期値で何個か値を持っていてredux側でfetchしてAPIに問い合わせ保持する。 UX向上改善の為
- apiデーターで表示するページに行く前にreduxでプリフェッチしておく
- フロント側でuseEffect()しない。
- 製品登録・製品一覧取得はフロント側で取得（redux側ではしない）
- ガントチャートは react-Gantt-Chart使う