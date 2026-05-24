# Coverage Report

## Загальне покриття
- Statements: ~38.32%
- Branches: 20.67%
- Functions: ~30.45%
- Lines: ~40.73%

## Аналіз

# Аналіз

## Які функції/класи покриті найкраще?

### JavaScript (Jest — src/helper/renderScheduleTable.js)

**checkSemesterEnd**
- Покрита позитивними та негативними сценаріями:
  - дата в минулому → `true`
  - дата в майбутньому → `false`
  - edge cases: `null`, `undefined`
- Основна логіка порівняння дат перевірена

**isWeekOdd**
- Покрита повністю:
  - непарні числа → `true`
  - парні числа → `false`
  - граничні значення (0, -1)
- Всі основні гілки виконуються

**getWeekParity**
- Покрита частково:
  - робота з Date об’єктами
  - базове обчислення номера тижня
- Перевірені стандартні сценарії (сьогоднішня дата, фіксована дата)

**renderGroupTable / renderFullSchedule**
- Частково покриті через інтеграційні тести компонентів
- Перевіряється рендер таблиці та базові дані семестру
- Складна внутрішня логіка умов покрита не повністю

---

## Які потребують додаткових тестів?

**getWeekParity**
- не покриті edge cases:
  - невалідні дати (`null`, `undefined`, `"invalid"`)
  - дата до початку семестру (return 0)

**renderGroupCells**
- складна логіка групування:
  - `card === null`
  - `skip_render === 1`
  - `weekly_render === 1`
  - `isEqual(card, tempCard)` (дублікати)

**renderTeacherClassCell**
- потрібно покрити:
  - `cards === undefined`
  - `cards.cards.length > 1`
  - різні room.id (intersection логіка)

**renderTeacherRangeSchedule**
- не покриті:
  - `schedule = null`
  - `schedule = []`
  - гілка EMPTY_SCHEDULE

## Скріншот
![alt text](image-3.png)
![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)