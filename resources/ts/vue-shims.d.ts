// declare module '何らかのパス' を使ってプロジェクトのモジュールをグローバルに宣言することができます。
// https://qiita.com/Nossa/items/726cc3e67527e896ed1e
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

// declare var joining_route: any;
// declare var enrollment_status: any;
// declare var occupation: any;
// declare var position: any;
// declare var enrollment_period: any;
// declare var employment_status: any;
// declare var welfare_office_environment: any;
// declare var working_hours: any;

declare type setParams = {
  joining_route: any;
  enrollment_status: any;
  occupation: any;
  position: any;
  enrollment_period: any;
  employment_status: any;
  welfare_office_environment: any;
  working_hours: any;
}
