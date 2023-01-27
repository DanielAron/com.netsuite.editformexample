/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */

define(["N/record", "N/log"], function (record, log) {
  function pageInit(context) {
    console.log("browser log", "hia");

    var currentRecord = context.currentRecord;
    currentRecord.getField({
      fieldId: "scriptid",
    }).isDisplay = false;

    log.debug("backend log", "HIA");
  }

  return {
    pageInit: pageInit,
  };
});
