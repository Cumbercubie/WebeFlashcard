const FLASHCARD_DECKS = [{
  title: 'CSS Text Properties',
  words: {
    'color': 'font color',
    'font-style': 'controls italics',
    'font-weight': 'controls boldness',
    'text-decoration': 'controls underline',
    'font-family': 'font face'
  }
}, {
  title: 'Basic Korean Words',
  words: {
    '여자': 'woman',
    '남자': 'man',
    '사람': 'person',
    '나무': 'tree',
    '호수': 'lake',
    '구름': 'cloud',
    '땅': 'ground'
  }
}, {
  title: 'Foods in Korean',
  words: {
    '사과': 'apple',
    '빵': 'bread',
    '치즈': 'cheese',
    '우유': 'milk',
    '커피': 'coffee',
    '바나나': 'banana',
    '복숭아': 'peach'
  }
}];


var QUESTIONS = [
{
	category: 'Phần mềm',
	contents: 
	{
	'Nêu cú pháp nếu muốn đèn sáng tắt sử dụng tín hiệu digital':'digitalWrite(tên pin, HIGH/LOW);',
	'Nêu cú pháp nếu muốn đèn sáng tắt sử dụng tín hiệu analog':'analogwrite(tên pin, giá trị xung);',
	'Ta có code: int a=5; if(a=3) {a++; cout << a;}, ct sẽ xuất ra số 6 đúng hay sai?':'Sai',
	'Trong switch case có cần default case không ?':'Không',
	'Nếu xài if - else if - if , với else if và if sau cùng điều kiện. Hỏi có mấy câu lệnh được thực thi. if sau là phần giao hay phần hợp hay độc lập so với if đầu và else if?':'2. Độc lập',
	'Trong switch case, default case đặt đầu có ổn không? Có ý nghĩa như thế nào':'Không. Do nó có vai trò như else nên cần 1 điều kiện tiên quyết',
	'Lệnh break trong mỗi case dùng để làm gì? Trường hợp có 5 cases mà input rơi vào case 2, case 2 không có break,điều gì xảy ra? ( tương tự cho input là case 5)':'Case 2: Tất cả các câu lệnh 2 3 4 5 đều được thực thi.Case 5: mỗi câu lệnh của case 5 được thực thi',
	'if (a=3) sẽ trả về giá trị true hay false?':'luôn luôn là true',
	'Hàm kiểu void trả về kiểu giá trị gì?':'Null',
	'Khi không có câu lệnh "using namespace std;" thì cout được không? Cách khắc phục?':'Không. khắc phục bằng std::cout;',
	'cout << !(1 != 2); ra gì?':'0',
	'Float & Double, kiểu dữ liệu nào có miền giá trị lớn hơn?':'Double (Gấp đối Float) ',
	'Câu lệnh nào dùng để dừng màn hình console?':'System("pause");',
	'int a = 10; int b = 15; cout << a * ++b; ':'160',
	'int a = 5; int& b = a; a = 10; cout << b; ra gì?':'10'
	}
},
{
	category: 'Phần cứng',
	contents: 
	{
		'Arduino có chỉ số input giới hạn là 6V-20V đúng hay sai? ':'Đúng',
		'Chỉ số input NSX khuyên nên cấp cho 1 bo mạch Arduino là bao nhiêu?':'7V-12V',
		'Arduino có chỉ số output là 3.3V hay 5V?':'Cả hai',
		'Cách phân biệt chân dương và âm của đèn LED dựa trên chân đèn?':'Chân dài --> chân dương, chân ngắn --> chân âm',
		'Cách phân biệt chân dương và âm của đèn LED không dựa trên chân đèn?':'Nhìn bên trong đèn, phần kim loại dài hơn --> chân âm và ngược lại',
		'Sự khác biệt khi đèn LED sáng nhờ cổng 5V và cổng 13?':'Cổng 5V: sáng do luôn có dòng điện chạy qua cổng 5V. Cổng 13: sáng nhờ code',
		'Tín hiệu analog có miền giá trị trong khoảng nào ?':'0-1023',
		'LED là loại linh kiện gì ?':'Diode (quang/bán dẫn)'
	}
}
];



