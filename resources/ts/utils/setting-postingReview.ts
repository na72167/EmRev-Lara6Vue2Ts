// ========会社レビュー登録画面=========

//TODO:会社関係で纏めすぎている節があるので後で分割。

export const SETTINGS_REVIEW_COMPANY = {
  //intro
  pageTitle: 'レビュー会社選択画面',
  introTextTitle: 'ReviewCompanySelection',
  introTextSub: 'レビュー会社選択画面',
  //form
  title: 'Register Review List',
  industryClassification:'業界分類:',
  companyName:'会社名:',
  location:'所在地:',
  numberOfReviews:'この会社のレビュー数',
  case:'件',
  postedDate:'投稿日:',
  generalComment:'総評:',
  details:'このレビューの詳細を見る',
  mr:'さん',
  age:'歳',
  star:'☆',
  makeReview:'この会社のレビューをする'
};

// ==========

//入社経路や在籍状況について
export const SETTINGS_JOINING_ROUTE = {
  //intro
  pageTitle: 'レビュー登録画面',
  introTextTitle: 'Post Review Company',
  introTextSub: '入社経路や在籍状況について',
  //TODO:intro部分と文章内容を分けたい。
  contentTitle: 'Post Review Company',
  contentSubTitle: '入社経路や在籍状況について',
  //option
  formType: 'JoiningRoute',
};

export const SETTINGS_JOINING_ROUTE_FORM = [
  { inputType: 'small', dyClass: 'joiningRouteErrMsg', placeholder: '入社経路', vModel: 'joiningRoute'},
  { inputType: 'small', dyClass: 'enrollmentStatusErrMsg', placeholder: '在籍状況', vModel: 'enrollmentStatus'},
  { inputType: 'small', dyClass: 'occupationErrMsg', placeholder: '在籍時の職種', vModel: 'occupation'},
  { inputType: 'small', dyClass: 'positionErrMsg', placeholder: '在籍時の役職', vModel: 'position'},
  { inputType: 'small', dyClass: 'enrollmentPeriodErrMsg', placeholder: '在籍期間', vModel: 'enrollmentPeriod'},
  { inputType: 'small', dyClass: 'employmentStatusErrMsg', placeholder: '在籍形態', vModel: 'employmentStatus'},
  { inputType: 'small', dyClass: 'welfareOfficeEnvironmentErrMsg', placeholder: '福利厚生', vModel: 'welfareOfficeEnvironment'},
  { inputType: 'small', dyClass: 'workingHoursErrMsg', placeholder: '勤務時間', vModel: 'workingHours'},
];

// ==========

export const SETTINGS_INTERNAL_SYSTEMS_AND_CORPORATE_CULTURE = {

  //intro
  pageTitle: 'レビュー登録画面',
  introTextTitle: 'Review Register',
  introTextSub: '社内制度や企業文化について',

  //form
  // title: 'Register Review List',
  // industryClassification:'業界分類:',
  // companyName:'会社名:',
  // location:'所在地:',
  // numberOfReviews:'この会社のレビュー数',
  // case:'件',
  // postedDate:'投稿日:',
  // generalComment:'総評:',
  // details:'このレビューの詳細を見る',
  // mr:'さん',
  // age:'歳',
  // star:'☆',
  // makeReview:'この会社のレビューをする',

  //option
  formType: 'InternalSystemsAndCorporateCulture',
};

export const SETTINGS_GAPS_AND_JOB_SATISFACTION_AFTER_JOINING_THE_COMPANY = {

  //intro
  pageTitle: 'レビュー登録画面',
  introTextTitle: 'Review Register',
  introTextSub: '入社後のギャップや働きがい',

  //form
  // title: 'Register Review List',
  // industryClassification:'業界分類:',
  // companyName:'会社名:',
  // location:'所在地:',
  // numberOfReviews:'この会社のレビュー数',
  // case:'件',
  // postedDate:'投稿日:',
  // generalComment:'総評:',
  // details:'このレビューの詳細を見る',
  // mr:'さん',
  // age:'歳',
  // star:'☆',
  // makeReview:'この会社のレビューをする',

  //option
  formType: 'GapsAndJobSatisfactionAfterJoiningTheCompany',
};

export const SETTINGS_GENERAL_COMMENT = {

  //intro
  pageTitle: 'レビュー登録画面',
  introTextTitle: 'Review Register',
  introTextSub: '総評',

  //form
  // title: 'Register Review List',
  // industryClassification:'業界分類:',
  // companyName:'会社名:',
  // location:'所在地:',
  // numberOfReviews:'この会社のレビュー数',
  // case:'件',
  // postedDate:'投稿日:',
  // generalComment:'総評:',
  // details:'このレビューの詳細を見る',
  // mr:'さん',
  // age:'歳',
  // star:'☆',
  // makeReview:'この会社のレビューをする',

  //option
  formType: 'GeneralComment',
};


export const SETTINGS_POSTING_CHECK = {

  //intro
  pageTitle: 'レビュー登録画面',
  introTextTitle: 'Review Register',
  introTextSub: '投稿内容の確認',

  //form
  // title: 'Register Review List',
  // industryClassification:'業界分類:',
  // companyName:'会社名:',
  // location:'所在地:',
  // numberOfReviews:'この会社のレビュー数',
  // case:'件',
  // postedDate:'投稿日:',
  // generalComment:'総評:',
  // details:'このレビューの詳細を見る',
  // mr:'さん',
  // age:'歳',
  // star:'☆',
  // makeReview:'この会社のレビューをする',

  //option
  formType: 'PostingCheck',
};
