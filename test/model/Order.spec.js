/*
 * SeminarCatalog API
 * Rest API for SeminarCatalog Administration
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@databay.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SeminarCatalogApi);
  }
}(this, function(expect, SeminarCatalogApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Order', function() {
      beforeEach(function() {
        instance = new SeminarCatalogApi.Order();
      });

      it('should create an instance of Order', function() {
        // TODO: update the code to test Order
        expect(instance).to.be.a(SeminarCatalogApi.Order);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property languageCode (base name: "languageCode")', function() {
        // TODO: update the code to test the property languageCode
        expect(instance).to.have.property('languageCode');
        // expect(instance.languageCode).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "countryCode")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property logdata (base name: "logdata")', function() {
        // TODO: update the code to test the property logdata
        expect(instance).to.have.property('logdata');
        // expect(instance.logdata).to.be(expectedValueLiteral);
      });

      it('should have the property billingAddress (base name: "billingAddress")', function() {
        // TODO: update the code to test the property billingAddress
        expect(instance).to.have.property('billingAddress');
        // expect(instance.billingAddress).to.be(expectedValueLiteral);
      });

      it('should have the property shippingAddress (base name: "shippingAddress")', function() {
        // TODO: update the code to test the property shippingAddress
        expect(instance).to.have.property('shippingAddress');
        // expect(instance.shippingAddress).to.be(expectedValueLiteral);
      });

      it('should have the property participantData (base name: "participantData")', function() {
        // TODO: update the code to test the property participantData
        expect(instance).to.have.property('participantData');
        // expect(instance.participantData).to.be(expectedValueLiteral);
      });

      it('should have the property accommodation (base name: "accommodation")', function() {
        // TODO: update the code to test the property accommodation
        expect(instance).to.have.property('accommodation');
        // expect(instance.accommodation).to.be(expectedValueLiteral);
      });

      it('should have the property accommodationDate (base name: "accommodationDate")', function() {
        // TODO: update the code to test the property accommodationDate
        expect(instance).to.have.property('accommodationDate');
        // expect(instance.accommodationDate).to.be(expectedValueLiteral);
      });

      it('should have the property accommodationPersonAmount (base name: "accommodationPersonAmount")', function() {
        // TODO: update the code to test the property accommodationPersonAmount
        expect(instance).to.have.property('accommodationPersonAmount');
        // expect(instance.accommodationPersonAmount).to.be(expectedValueLiteral);
      });

      it('should have the property accommodationNightAmount (base name: "accommodationNightAmount")', function() {
        // TODO: update the code to test the property accommodationNightAmount
        expect(instance).to.have.property('accommodationNightAmount');
        // expect(instance.accommodationNightAmount).to.be(expectedValueLiteral);
      });

      it('should have the property subtotal (base name: "subtotal")', function() {
        // TODO: update the code to test the property subtotal
        expect(instance).to.have.property('subtotal');
        // expect(instance.subtotal).to.be(expectedValueLiteral);
      });

      it('should have the property total (base name: "total")', function() {
        // TODO: update the code to test the property total
        expect(instance).to.have.property('total');
        // expect(instance.total).to.be(expectedValueLiteral);
      });

      it('should have the property vat (base name: "vat")', function() {
        // TODO: update the code to test the property vat
        expect(instance).to.have.property('vat');
        // expect(instance.vat).to.be(expectedValueLiteral);
      });

      it('should have the property vatIncluded (base name: "vatIncluded")', function() {
        // TODO: update the code to test the property vatIncluded
        expect(instance).to.have.property('vatIncluded');
        // expect(instance.vatIncluded).to.be(expectedValueLiteral);
      });

      it('should have the property discount (base name: "discount")', function() {
        // TODO: update the code to test the property discount
        expect(instance).to.have.property('discount');
        // expect(instance.discount).to.be(expectedValueLiteral);
      });

      it('should have the property currencyCode (base name: "currencyCode")', function() {
        // TODO: update the code to test the property currencyCode
        expect(instance).to.have.property('currencyCode');
        // expect(instance.currencyCode).to.be(expectedValueLiteral);
      });

      it('should have the property paymentDate (base name: "paymentDate")', function() {
        // TODO: update the code to test the property paymentDate
        expect(instance).to.have.property('paymentDate');
        // expect(instance.paymentDate).to.be(expectedValueLiteral);
      });

      it('should have the property exportDate (base name: "exportDate")', function() {
        // TODO: update the code to test the property exportDate
        expect(instance).to.have.property('exportDate');
        // expect(instance.exportDate).to.be(expectedValueLiteral);
      });

      it('should have the property exportId (base name: "exportId")', function() {
        // TODO: update the code to test the property exportId
        expect(instance).to.have.property('exportId');
        // expect(instance.exportId).to.be(expectedValueLiteral);
      });

      it('should have the property notes (base name: "notes")', function() {
        // TODO: update the code to test the property notes
        expect(instance).to.have.property('notes');
        // expect(instance.notes).to.be(expectedValueLiteral);
      });

      it('should have the property knownBy (base name: "knownBy")', function() {
        // TODO: update the code to test the property knownBy
        expect(instance).to.have.property('knownBy');
        // expect(instance.knownBy).to.be(expectedValueLiteral);
      });

      it('should have the property participationInvitationFlag (base name: "participationInvitationFlag")', function() {
        // TODO: update the code to test the property participationInvitationFlag
        expect(instance).to.have.property('participationInvitationFlag');
        // expect(instance.participationInvitationFlag).to.be(expectedValueLiteral);
      });

      it('should have the property bookingNumber (base name: "bookingNumber")', function() {
        // TODO: update the code to test the property bookingNumber
        expect(instance).to.have.property('bookingNumber');
        // expect(instance.bookingNumber).to.be(expectedValueLiteral);
      });

      it('should have the property reservedUntil (base name: "reservedUntil")', function() {
        // TODO: update the code to test the property reservedUntil
        expect(instance).to.have.property('reservedUntil');
        // expect(instance.reservedUntil).to.be(expectedValueLiteral);
      });

      it('should have the property bookingType (base name: "bookingType")', function() {
        // TODO: update the code to test the property bookingType
        expect(instance).to.have.property('bookingType');
        // expect(instance.bookingType).to.be(expectedValueLiteral);
      });

      it('should have the property shippingType (base name: "shippingType")', function() {
        // TODO: update the code to test the property shippingType
        expect(instance).to.have.property('shippingType');
        // expect(instance.shippingType).to.be(expectedValueLiteral);
      });

      it('should have the property transactionData (base name: "transactionData")', function() {
        // TODO: update the code to test the property transactionData
        expect(instance).to.have.property('transactionData');
        // expect(instance.transactionData).to.be(expectedValueLiteral);
      });

      it('should have the property paymentData (base name: "paymentData")', function() {
        // TODO: update the code to test the property paymentData
        expect(instance).to.have.property('paymentData');
        // expect(instance.paymentData).to.be(expectedValueLiteral);
      });

      it('should have the property firstReminderStatus (base name: "firstReminderStatus")', function() {
        // TODO: update the code to test the property firstReminderStatus
        expect(instance).to.have.property('firstReminderStatus');
        // expect(instance.firstReminderStatus).to.be(expectedValueLiteral);
      });

      it('should have the property secondReminderStatus (base name: "secondReminderStatus")', function() {
        // TODO: update the code to test the property secondReminderStatus
        expect(instance).to.have.property('secondReminderStatus');
        // expect(instance.secondReminderStatus).to.be(expectedValueLiteral);
      });

      it('should have the property thirdReminderStatus (base name: "thirdReminderStatus")', function() {
        // TODO: update the code to test the property thirdReminderStatus
        expect(instance).to.have.property('thirdReminderStatus');
        // expect(instance.thirdReminderStatus).to.be(expectedValueLiteral);
      });

      it('should have the property reservationEmail (base name: "reservationEmail")', function() {
        // TODO: update the code to test the property reservationEmail
        expect(instance).to.have.property('reservationEmail');
        // expect(instance.reservationEmail).to.be(expectedValueLiteral);
      });

      it('should have the property reservationCode (base name: "reservationCode")', function() {
        // TODO: update the code to test the property reservationCode
        expect(instance).to.have.property('reservationCode');
        // expect(instance.reservationCode).to.be(expectedValueLiteral);
      });

      it('should have the property reservationContact (base name: "reservationContact")', function() {
        // TODO: update the code to test the property reservationContact
        expect(instance).to.have.property('reservationContact');
        // expect(instance.reservationContact).to.be(expectedValueLiteral);
      });

      it('should have the property createUser (base name: "createUser")', function() {
        // TODO: update the code to test the property createUser
        expect(instance).to.have.property('createUser');
        // expect(instance.createUser).to.be(expectedValueLiteral);
      });

      it('should have the property client (base name: "client")', function() {
        // TODO: update the code to test the property client
        expect(instance).to.have.property('client');
        // expect(instance.client).to.be(expectedValueLiteral);
      });

      it('should have the property storageContainer (base name: "storageContainer")', function() {
        // TODO: update the code to test the property storageContainer
        expect(instance).to.have.property('storageContainer');
        // expect(instance.storageContainer).to.be(expectedValueLiteral);
      });

      it('should have the property affiliateCode (base name: "affiliateCode")', function() {
        // TODO: update the code to test the property affiliateCode
        expect(instance).to.have.property('affiliateCode');
        // expect(instance.affiliateCode).to.be(expectedValueLiteral);
      });

      it('should have the property partnerAreaType (base name: "partnerAreaType")', function() {
        // TODO: update the code to test the property partnerAreaType
        expect(instance).to.have.property('partnerAreaType');
        // expect(instance.partnerAreaType).to.be(expectedValueLiteral);
      });

      it('should have the property genesisStatus (base name: "genesisStatus")', function() {
        // TODO: update the code to test the property genesisStatus
        expect(instance).to.have.property('genesisStatus');
        // expect(instance.genesisStatus).to.be(expectedValueLiteral);
      });

      it('should have the property certBody (base name: "certBody")', function() {
        // TODO: update the code to test the property certBody
        expect(instance).to.have.property('certBody');
        // expect(instance.certBody).to.be(expectedValueLiteral);
      });

      it('should have the property syncFields (base name: "_syncFields")', function() {
        // TODO: update the code to test the property syncFields
        expect(instance).to.have.property('syncFields');
        // expect(instance.syncFields).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property foreignId (base name: "foreignId")', function() {
        // TODO: update the code to test the property foreignId
        expect(instance).to.have.property('foreignId');
        // expect(instance.foreignId).to.be(expectedValueLiteral);
      });

      it('should have the property language (base name: "language")', function() {
        // TODO: update the code to test the property language
        expect(instance).to.have.property('language');
        // expect(instance.language).to.be(expectedValueLiteral);
      });

      it('should have the property createDate (base name: "createDate")', function() {
        // TODO: update the code to test the property createDate
        expect(instance).to.have.property('createDate');
        // expect(instance.createDate).to.be(expectedValueLiteral);
      });

      it('should have the property changeDate (base name: "changeDate")', function() {
        // TODO: update the code to test the property changeDate
        expect(instance).to.have.property('changeDate');
        // expect(instance.changeDate).to.be(expectedValueLiteral);
      });

      it('should have the property deleted (base name: "deleted")', function() {
        // TODO: update the code to test the property deleted
        expect(instance).to.have.property('deleted');
        // expect(instance.deleted).to.be(expectedValueLiteral);
      });

      it('should have the property hidden (base name: "hidden")', function() {
        // TODO: update the code to test the property hidden
        expect(instance).to.have.property('hidden');
        // expect(instance.hidden).to.be(expectedValueLiteral);
      });

      it('should have the property sorting (base name: "sorting")', function() {
        // TODO: update the code to test the property sorting
        expect(instance).to.have.property('sorting');
        // expect(instance.sorting).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

    });
  });

}));
