/**
 * HƯỚNG DẪN DÀNH CHO GIÁO VIÊN:
 * Thầy/cô có thể thay đổi nội dung ở file này.
 * 
 * 1. theoryData: Chứa nội dung lý thuyết.
 *    - title: Tên chương lớn
 *    - items: Các bài học nhỏ bên trong
 *      - subTitle: Tên bài học
 *      - content: Nội dung bài học (Hỗ trợ thẻ HTML cơ bản như <b>, <i>, <br/>, <ul>, <li>)
 * 
 * 2. exercisesData: Chứa các câu hỏi trắc nghiệm.
 *    - title: Tên chủ đề bài tập
 *    - questions: Danh sách câu hỏi
 *      - text: Nội dung câu hỏi
 *      - options: 4 đáp án (A, B, C, D)
 *      - correctAnswerIndex: Vị trí đáp án đúng (0 là A, 1 là B, 2 là C, 3 là D)
 *      - explanation: Lời giải thích chi tiết hiện ra sau khi chọn đáp án
 */

export const theoryData = [
  {
    id: 'phonetics',
    title: 'I. Ngữ âm (Phonetics)',
    items: [
      {
        subTitle: '1. Cách phát âm nguyên âm đơn /æ/, /ɑ:/, /e/',
        content: `
          <p><b>1. Âm /æ/ (a bẹt):</b> Thường xuất hiện trong các từ có một âm tiết chứa chữ "a".</p>
          <ul>
            <li>Ví dụ: h<b>a</b>t /hæt/, c<b>a</b>t /kæt/, m<b>a</b>p /mæp/</li>
          </ul>
          <p><b>2. Âm /ɑ:/ (a dài):</b> Thường xuất hiện trong các từ chứa "ar", "a" theo sau là f, s, th, n.</p>
          <ul>
            <li>Ví dụ: c<b>ar</b> /kɑːr/, f<b>a</b>ther /ˈfɑːðər/, cl<b>a</b>ss /klɑːs/</li>
          </ul>
          <p><b>3. Âm /e/ (e ngắn):</b> Thường xuất hiện trong các từ chứa "e" hoặc "ea".</p>
          <ul>
            <li>Ví dụ: b<b>e</b>d /bed/, h<b>ea</b>d /hed/, p<b>e</b>n /pen/</li>
          </ul>
        `
      },
      {
        subTitle: '2. Trọng âm (Word Stress)',
        content: `
          <p><b>Quy tắc cơ bản với từ 2 âm tiết:</b></p>
          <ul>
            <li><b>Động từ:</b> Trọng âm thường rơi vào âm tiết thứ 2. <br/><i>Ví dụ: be'gin, in'vent, de'cide.</i></li>
            <li><b>Danh từ & Tính từ:</b> Trọng âm thường rơi vào âm tiết thứ 1. <br/><i>Ví dụ: 'water, 'party, 'happy, 'clever.</i></li>
          </ul>
          <p><i>Ngoại lệ:</i> 'visit (v), 'promise (v), ad'vice (n), ma'chine (n)...</p>
        `
      }
    ]
  },
  {
    id: 'grammar-tenses',
    title: 'II. Ngữ pháp - Các thì của động từ',
    items: [
      {
        subTitle: '1. Hiện tại đơn (Present Simple)',
        content: `
          <p><b>Công thức:</b> S + V(s/es) + O</p>
          <p><b>Cách dùng:</b> Diễn tả thói quen, sự thật hiển nhiên, lịch trình.</p>
          <p><b>Dấu hiệu nhận biết:</b> always, usually, often, sometimes, never, every day/week...</p>
        `
      },
      {
        subTitle: '2. Quá khứ đơn (Past Simple)',
        content: `
          <p><b>Công thức:</b> S + V2/ed + O</p>
          <p><b>Cách dùng:</b> Diễn tả hành động đã xảy ra và chấm dứt hoàn toàn trong quá khứ.</p>
          <p><b>Dấu hiệu nhận biết:</b> yesterday, last (week, year), ago, in + năm trong quá khứ (in 1990).</p>
        `
      }
    ]
  },
  {
    id: 'grammar-clauses',
    title: 'III. Ngữ pháp - Mệnh đề',
    items: [
      {
        subTitle: '1. Mệnh đề quan hệ (Relative Clauses)',
        content: `
          <p>Dùng để giải thích rõ hơn cho danh từ đứng trước nó.</p>
          <ul>
            <li><b>Who:</b> Thay thế cho người, làm chủ ngữ. (The man <i>who</i> is standing there...)</li>
            <li><b>Whom:</b> Thay thế cho người, làm tân ngữ. (The woman <i>whom</i> I met yesterday...)</li>
            <li><b>Which:</b> Thay thế cho vật. (The book <i>which</i> is on the table...)</li>
            <li><b>That:</b> Có thể thay thế cho Who, Whom, Which trong mệnh đề quan hệ xác định.</li>
          </ul>
        `
      }
    ]
  }
];

export const exercisesData = [
  {
    id: 'ex-phonetics',
    title: 'Bài tập: Ngữ âm & Trọng âm',
    questions: [
      {
        id: 'q1',
        text: 'Choose the word whose underlined part is pronounced differently from the others.',
        options: ['h[a]t', 'c[a]r', 'b[a]t', 'c[a]t'],
        correctAnswerIndex: 1,
        explanation: 'Từ <b>car</b> phát âm là /kɑːr/ (âm a dài). Các từ còn lại phát âm là /æ/ (âm a bẹt).'
      },
      {
        id: 'q2',
        text: 'Choose the word that has a different stress pattern from the others.',
        options: ['invent', 'decide', 'visit', 'provide'],
        correctAnswerIndex: 2,
        explanation: 'Từ <b>visit</b> có trọng âm rơi vào âm tiết thứ nhất (/ˈvɪzɪt/). Các từ còn lại là động từ 2 âm tiết nên trọng âm rơi vào âm tiết thứ hai.'
      }
    ]
  },
  {
    id: 'ex-tenses',
    title: 'Bài tập: Thì của động từ',
    questions: [
      {
        id: 'q3',
        text: 'My father _______ to work by car every day.',
        options: ['go', 'goes', 'went', 'is going'],
        correctAnswerIndex: 1,
        explanation: 'Dấu hiệu <b>"every day"</b> chỉ thói quen ở hiện tại -> Dùng thì Hiện tại đơn. Chủ ngữ "My father" (số ít) nên động từ thêm "es" -> <b>goes</b>.'
      },
      {
        id: 'q4',
        text: 'They _______ a new house in this city last year.',
        options: ['buy', 'buys', 'bought', 'have bought'],
        correctAnswerIndex: 2,
        explanation: 'Dấu hiệu <b>"last year"</b> chỉ hành động đã xảy ra trong quá khứ -> Dùng thì Quá khứ đơn. Động từ bất quy tắc của "buy" là <b>bought</b>.'
      }
    ]
  },
  {
    id: 'ex-communication',
    title: 'Bài tập: Giao tiếp (Communication)',
    questions: [
      {
        id: 'q5',
        text: 'John: "Would you like to go to the cinema with me tonight?" - Mary: "_______"',
        options: ['Yes, I\'d love to.', 'No, thanks.', 'You\'re welcome.', 'It doesn\'t matter.'],
        correctAnswerIndex: 0,
        explanation: 'Đây là một lời mời ("Would you like..."). Cách đáp lại lịch sự và phổ biến nhất khi đồng ý là <b>"Yes, I\'d love to."</b> (Vâng, mình rất thích).'
      }
    ]
  }
];
