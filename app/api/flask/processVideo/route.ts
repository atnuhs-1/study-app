import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log("---processVideo----")
    // リクエストボディを取得
    const { frameName } = await request.json();


    // FlaskエンドポイントにPOSTリクエストを送信
    const response = await fetch('http://127.0.0.1:5000/flask/processVideo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ frame: frameName }),
      
    });

    // レスポンスが成功かどうかチェック
    if (!response.ok) {
      throw new Error('Failed to fetch data from Flask endpoint');
    }

    // レスポンスをJSONとしてパース
    const data = await response.json();
    // console.log(data);

    // 成功したレスポンスを返す
    return NextResponse.json(data);
  } catch (error: any) {
    // エラーが発生した場合、エラーレスポンスを返す
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
