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
    describe('Participant', function() {
      beforeEach(function() {
        instance = new SeminarCatalogApi.Participant();
      });

      it('should create an instance of Participant', function() {
        // TODO: update the code to test Participant
        expect(instance).to.be.a(SeminarCatalogApi.Participant);
      });

      it('should have the property firstname (base name: "firstname")', function() {
        // TODO: update the code to test the property firstname
        expect(instance).to.have.property('firstname');
        // expect(instance.firstname).to.be(expectedValueLiteral);
      });

      it('should have the property lastname (base name: "lastname")', function() {
        // TODO: update the code to test the property lastname
        expect(instance).to.have.property('lastname');
        // expect(instance.lastname).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property degree (base name: "degree")', function() {
        // TODO: update the code to test the property degree
        expect(instance).to.have.property('degree');
        // expect(instance.degree).to.be(expectedValueLiteral);
      });

      it('should have the property gender (base name: "gender")', function() {
        // TODO: update the code to test the property gender
        expect(instance).to.have.property('gender');
        // expect(instance.gender).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property company (base name: "company")', function() {
        // TODO: update the code to test the property company
        expect(instance).to.have.property('company');
        // expect(instance.company).to.be(expectedValueLiteral);
      });

      it('should have the property department (base name: "department")', function() {
        // TODO: update the code to test the property department
        expect(instance).to.have.property('department');
        // expect(instance.department).to.be(expectedValueLiteral);
      });

      it('should have the property street (base name: "street")', function() {
        // TODO: update the code to test the property street
        expect(instance).to.have.property('street');
        // expect(instance.street).to.be(expectedValueLiteral);
      });

      it('should have the property zipcode (base name: "zipcode")', function() {
        // TODO: update the code to test the property zipcode
        expect(instance).to.have.property('zipcode');
        // expect(instance.zipcode).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "countryCode")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property phoneHome (base name: "phoneHome")', function() {
        // TODO: update the code to test the property phoneHome
        expect(instance).to.have.property('phoneHome');
        // expect(instance.phoneHome).to.be(expectedValueLiteral);
      });

      it('should have the property phoneMobile (base name: "phoneMobile")', function() {
        // TODO: update the code to test the property phoneMobile
        expect(instance).to.have.property('phoneMobile');
        // expect(instance.phoneMobile).to.be(expectedValueLiteral);
      });

      it('should have the property phoneOffice (base name: "phoneOffice")', function() {
        // TODO: update the code to test the property phoneOffice
        expect(instance).to.have.property('phoneOffice');
        // expect(instance.phoneOffice).to.be(expectedValueLiteral);
      });

      it('should have the property fax (base name: "fax")', function() {
        // TODO: update the code to test the property fax
        expect(instance).to.have.property('fax');
        // expect(instance.fax).to.be(expectedValueLiteral);
      });

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

      it('should have the property positionYears (base name: "positionYears")', function() {
        // TODO: update the code to test the property positionYears
        expect(instance).to.have.property('positionYears');
        // expect(instance.positionYears).to.be(expectedValueLiteral);
      });

      it('should have the property faxOffice (base name: "faxOffice")', function() {
        // TODO: update the code to test the property faxOffice
        expect(instance).to.have.property('faxOffice');
        // expect(instance.faxOffice).to.be(expectedValueLiteral);
      });

      it('should have the property phoneMobileOffice (base name: "phoneMobileOffice")', function() {
        // TODO: update the code to test the property phoneMobileOffice
        expect(instance).to.have.property('phoneMobileOffice');
        // expect(instance.phoneMobileOffice).to.be(expectedValueLiteral);
      });

      it('should have the property birthPlace (base name: "birthPlace")', function() {
        // TODO: update the code to test the property birthPlace
        expect(instance).to.have.property('birthPlace');
        // expect(instance.birthPlace).to.be(expectedValueLiteral);
      });

      it('should have the property customerNumber (base name: "customerNumber")', function() {
        // TODO: update the code to test the property customerNumber
        expect(instance).to.have.property('customerNumber');
        // expect(instance.customerNumber).to.be(expectedValueLiteral);
      });

      it('should have the property graduationYear (base name: "graduationYear")', function() {
        // TODO: update the code to test the property graduationYear
        expect(instance).to.have.property('graduationYear');
        // expect(instance.graduationYear).to.be(expectedValueLiteral);
      });

      it('should have the property finalDegreeYear (base name: "finalDegreeYear")', function() {
        // TODO: update the code to test the property finalDegreeYear
        expect(instance).to.have.property('finalDegreeYear');
        // expect(instance.finalDegreeYear).to.be(expectedValueLiteral);
      });

      it('should have the property university (base name: "university")', function() {
        // TODO: update the code to test the property university
        expect(instance).to.have.property('university');
        // expect(instance.university).to.be(expectedValueLiteral);
      });

      it('should have the property education (base name: "education")', function() {
        // TODO: update the code to test the property education
        expect(instance).to.have.property('education');
        // expect(instance.education).to.be(expectedValueLiteral);
      });

      it('should have the property doctorateYear (base name: "doctorateYear")', function() {
        // TODO: update the code to test the property doctorateYear
        expect(instance).to.have.property('doctorateYear');
        // expect(instance.doctorateYear).to.be(expectedValueLiteral);
      });

      it('should have the property specialization (base name: "specialization")', function() {
        // TODO: update the code to test the property specialization
        expect(instance).to.have.property('specialization');
        // expect(instance.specialization).to.be(expectedValueLiteral);
      });

      it('should have the property associationOthers (base name: "associationOthers")', function() {
        // TODO: update the code to test the property associationOthers
        expect(instance).to.have.property('associationOthers');
        // expect(instance.associationOthers).to.be(expectedValueLiteral);
      });

      it('should have the property careOf (base name: "careOf")', function() {
        // TODO: update the code to test the property careOf
        expect(instance).to.have.property('careOf');
        // expect(instance.careOf).to.be(expectedValueLiteral);
      });

      it('should have the property role (base name: "role")', function() {
        // TODO: update the code to test the property role
        expect(instance).to.have.property('role');
        // expect(instance.role).to.be(expectedValueLiteral);
      });

      it('should have the property shippingAddress (base name: "shippingAddress")', function() {
        // TODO: update the code to test the property shippingAddress
        expect(instance).to.have.property('shippingAddress');
        // expect(instance.shippingAddress).to.be(expectedValueLiteral);
      });

      it('should have the property uniformTrainingNumber (base name: "uniformTrainingNumber")', function() {
        // TODO: update the code to test the property uniformTrainingNumber
        expect(instance).to.have.property('uniformTrainingNumber');
        // expect(instance.uniformTrainingNumber).to.be(expectedValueLiteral);
      });

      it('should have the property confirmDataValidation (base name: "confirmDataValidation")', function() {
        // TODO: update the code to test the property confirmDataValidation
        expect(instance).to.have.property('confirmDataValidation');
        // expect(instance.confirmDataValidation).to.be(expectedValueLiteral);
      });

      it('should have the property trainingYears (base name: "trainingYears")', function() {
        // TODO: update the code to test the property trainingYears
        expect(instance).to.have.property('trainingYears');
        // expect(instance.trainingYears).to.be(expectedValueLiteral);
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