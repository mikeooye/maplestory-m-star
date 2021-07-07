// 星力场
//
// 取点办法：开发者模式中，将最小宽度设定为800dp，为实际屏宽像素的一半 1600px
// 打开 Pixolor app，采集屏幕中的坐标和颜色，坐标在使用时，需要x2

var ret = images.requestScreenCapture();
if (!ret) {
  toast("获取截屏权限失败");
  exit();
}

sleep(1000);
var img = images.captureScreen();

while (1) {
  var ruleMatched = false;

  // 背包即将满
  var rule = [
    // 背包上，白色的两个点
    { x: 1168, y: 29, color: "ffffff" },
    // { x: 1167, y: 46, color: "ffffff" },
    // 背包容量进度，灰色底，如果非灰色，表示即将满
    { x: 1173, y: 44, not_color: "ffffff" },
  ];
  passRule(img, rule, function () {
    _click2(1167, 46);
    sleep(1500);
    _click2(1032, 710);
    sleep(1500);
    _click2(1161, 717);
    sleep(1500);
    _click2(794, 687);
    sleep(1500);
    _click2(639, 690);
    sleep(1500);
    _click2(1243, 78);
    sleep(1500);
    console.log("分解装备");

    _click2(1185, 717);
    sleep(1500);
    _click2(1160, 710);
    sleep(1500);
    _click2(787, 571);
    sleep(1500);
    _click2(1244, 80);
    sleep(1500);
    console.log("卖药");

    _click2(1242, 80);
    sleep(1000);

    img = images.captureScreen();

    ruleMatched = true;
  });

  // 死亡
  var rule = [
    // 回城
    { x: 481, y: 549, color: "4c87b0" },
    // 复活按钮，蓝色
    { x: 603, y: 540, color: "4c87b0" },
    // 复活按钮，橙色
    { x: 846, y: 546, color: "ee7046" },
  ];
  passRule(img, rule, function () {
    // 回城
    _click2(450, 556);
    sleep(3000);
    // 经验确认弹窗
    _click2(641, 569);
    sleep(1500);
    console.log("回城");

    _click2(1236, 37);
    sleep(1500);
    _click2(861, 198);
    sleep(1500);
    _click2(121, 612);
    sleep(1500);
    _click2(1155, 417);
    sleep(1500);
    _click2(1160, 702);
    sleep(1500);
    _click2(789, 571);
    sleep(3000);
    console.log("回到星力场");

    _click2(425, 736);
    sleep(1500);
    _click2(430, 733);
    sleep(1500);

    _click2(803, 611);
    sleep(1500);

    console.log("开始自动攻击");

    img = images.captureScreen();

    ruleMatched = true;
  });

  // 自動分配技能點
  rule = [
    // SP Up， 紅色箭頭
    { x: 653, y: 434, color: colors.rgb(240, 48, 48) },
    // 自動添加，暗紅色按鈕
    { x: 741, y: 428, color: colors.rgb(188, 60, 87) },
  ];
  passRule(img, rule, function () {
    _click2(741, 428);
    sleep(1000);
    img = images.captureScreen();
    ruleMatched = true;
    console.log("自动分配技能点");

    // 自動分配技能點，確認彈窗，只會出現一次
    rule = [
      // 取消按鈕，暗藍色
      { x: 434, y: 572, color: colors.rgb(76, 135, 176) },
      // 確認按鈕，橙色
      { x: 703, y: 562, color: colors.rgb(238, 112, 70) },
    ];
    passRule(img, rule, function () {
      _click2(703, 562);
      sleep(1000);
      img = images.captureScreen();
      ruleMatched = true;
      console.log("技能点分配确认弹窗");
    });
  });

  // 技能點分配提醒，高等級后，無法自動分配，只能取消
  rule = [
    // SP Up， 紅色箭頭
    { x: 653, y: 434, color: "f03030" },
    // 添加灰色按鈕
    { x: 731, y: 476, color: "617a95" },
    // 關閉按鈕中間的 x
    { x: 852, y: 478, color: "ffffff" },
  ];
  passRule(img, rule, function () {
    _click2(852, 478);
    sleep(1000);
    img = images.captureScreen();
    ruleMatched = true;
    console.log("手動分配技能点，關閉");
  });

  // 有新裝備可以穿
  rule = [
    // 穿上按鈕
    { x: 736, y: 475, color: "617a95" },
    { x: 851, y: 474, color: "ffffff" },
  ];
  passRule(img, rule, function () {
    _click2(736, 475);
    sleep(1000);
    img = images.captureScreen();
    ruleMatched = true;
    console.log("穿戴新装备");
  });

  // 廣告1
  rule = [
    // 黃顏色按鈕背景色
    { x: 486, y: 556, color: colors.rgb(236, 192, 2) },
    // 關閉按鈕
    { x: 1135, y: 112, color: colors.rgb(81, 95, 110) },
  ];
  passRule(img, rule, function () {
    _click2(1135, 112);
    sleep(1000);
    img = images.captureScreen();
    ruleMatched = true;
    console.log("关闭广告1");
  });

  // 廣告2
  rule = [
    // 黃顏色按鈕背景色
    { x: 1030, y: 83, color: colors.rgb(236, 192, 2) },
    // 關閉按鈕
    { x: 1031, y: 103, color: colors.rgb(165, 165, 165) },
  ];
  passRule(img, rule, function () {
    _click2(1031, 103);
    sleep(1000);
    img = images.captureScreen();
    ruleMatched = true;
    console.log("关闭广告2");
  });

  // 蘑菇新功能引导
  rule = [
    // 橙色按钮
    { x: 378, y: 398, color: "ee7046" },
    // 關閉按鈕
    { x: 714, y: 204, color: "ffffff" },
  ];
  passRule(img, rule, function () {
    _click2(714, 204);
    sleep(1000);
    img = images.captureScreen();
    ruleMatched = true;
    console.log("关闭蘑菇引导");
  });

  // 經驗獎勵時間提醒
  rule = [
    // 豬身上的暗紅色
    { x: 349, y: 359, color: colors.rgb(90, 32, 24) },
    // 關閉按鈕
    { x: 858, y: 253, color: "ffffff" },
  ];
  passRule(img, rule, function () {
    _click2(858, 253);
    sleep(1000);
    img = images.captureScreen();
    ruleMatched = true;
    console.log("关闭经验奖励时间提醒");
  });

  if (!ruleMatched) {
    sleep(1000);
    var img = images.captureScreen();
  }
}

function passRule(image, rule, callback) {
  var ret = true;

  for (let index = 0; index < rule.length; index++) {
    var e = rule[index];

    if (e.color != null) {
      var colorString;
      if (typeof e.color == "string") {
        colorString = "#ff" + e.color;
      } else {
        colorString = colors.toString(e.color);
      }

      if (!images.detectsColor(image, colorString, e.x * 2.0, e.y * 2.0)) {
        ret = false;
        break;
      }
    } else if (e.not_color != null) {
      var colorString;
      if (typeof e.not_color == "string") {
        colorString = "#ff" + e.not_color;
      } else {
        colorString = colors.toString(e.not_color);
      }

      if (images.detectsColor(image, colorString, e.x * 2.0, e.y * 2.0)) {
        ret = false;
        break;
      }
    }
  }

  if (ret) {
    callback();
  }
}

function _click2(x, y) {
  console.log("click at: x", x, ", y:", y);
  click(x * 2.0, y * 2.0);
}
