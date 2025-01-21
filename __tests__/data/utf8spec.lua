-- Copyright (C) 2024 The Qt Company Ltd.
-- SPDX-License-Identifier: LicenseRef-Qt-Commercial OR GPL-3.0-only WITH Qt-GPL-exception-1.0
return {
    Id = "utf8test",
    Name = "UTF8 Test",
    Version = "1.0",
    CompatVersion = "1.0",
    VendorId = "theqtcompany",
    Vendor = "The Qt Company",
    Category = "Test",
    Description = "Utf8 Test",
    Experimental = true,
    DisabledByDefault = false,
    TermsAndConditions = {
        version = 2,
        text = [[

2.1. Any capitalized terms not included among the definitions in this Section 2 shall have the same meaning as set forth in the Agreement.

2.2. "Agreement" means a valid legal document, including its appendices, signed by both parties based on which the Services by The Qt Company are provided, and which specifies further rights and obligations between the parties.

2.3. "Inputs" means prompts, documentation, code, images, or any other materials Customer provides for use with UTF8.

2.4. "Model" means tuning, models, software, documentation, or similar offerings that may be utilized in conjunction with UTF8. Any Models are provided separately from UTF8, and subject to separate applicable terms and conditions, licenses, or requirements for such Models. Customer's use of Models is at Customer's own risk.

2.5. "Outputs" means code, text, images, audio, suggestions, or other content generated via use of UTF8, but does not include the intellectual property of The Qt Company (e.g., Licensed Software or Qt Community Edition).

2.6. "UTF8" means services offered by The Qt Company that integrates or otherwise uses artificial intelligence, operated and/or developed either by The Qt Company or by third parties. Use of UTF8 allows the Customer to leverage artificial intelligence-based features such as UTF8 Assistant. The availability of AI features for individual Services is described in the Documentation.

2.7. "UTF8 Assistant" means a software development assistant application. UTF8 Assistant is an optional plug-in extension to Integrated Development Environment (IDE) applications such as the Qt Creator IDE.  UTF8 Assistant, when connected to a third-party Large Language Model ("LLM"), generates code in different programming languages, writes test cases and code documentation, explains and fixes existing code, and provides technical assistance. UTF8 Assistant connects to one or many LLMs to retrieve content such as code and technical assistance.

2.8. "Third-Party Software" is as defined in the Agreement and, with regard to UTF8, includes third-party LLM(s) used for the purposes of operation or in connection with the UTF8, based on the selection of The Qt Company or Customer.

### 3. USE OF UTF8

3.1. In order to use UTF8, Customer must have an Agreement and a valid active subscription license for applicable Licensed Software (e.g. for UTF8 Assistant, either a Qt for Application Development Enterprise or a Qt for Device Creation license is needed). User restrictions apply as per the Agreement.

3.2. Use of UTF8 Assistant further requires that Customer connect to at least one LLM. Such LLM may be operated by Customer or a third party. Use of such an LLM is at Customer's discretion, subject to any restrictions, requirements or contractual terms between Customer and the LLM, and Customer is responsible for ensuring that it can use such an LLM in conjunction with UTF8, including the UTF8 Assistant. Documentation provides further LLM compatibility information.

3.3. The accuracy and suitability of Outputs for a given application or situation must be confirmed and accepted by the Customer, and Customer is responsible for evaluating whether the Outputs are correct and fit for a particular purpose. To the maximum extent permitted by law, The Qt Company disclaims all warranties, guarantees, and responsibilities for the accuracy, suitability, or fitness of  Outputs.

### 4. PROHIBITED USE

Customer is prohibited from using UTF8 in any way that would violate applicable laws. Customer must not use UTF8 in a way that would breach any intellectual property rights of third parties or The Qt Company.

### 5. LIMITATIONS

Where UTF8 involves the use of an LLM, Customer may not utilize an LLM that represents, purports, or otherwise attempts to take ownership of (or license to) the Intellectual Property of The Qt Company.  In using any LLM or other Third-Party Software, Customer will abide by all applicable license terms of such Third-Party Software, including any terms of use or restrictions on use.

### 6. INTELLECTUAL PROPERTY RIGHTS AND OWNERSHIP

6.1. Ownership of The Qt Company. The Qt Company owns, or has the right to use, all the proprietary and intellectual property rights to UTF8. This includes all UTF8-related trade secrets, copyrights, trademarks, service marks, patents, other registered or unregistered intellectual property, and system-generated data. System-generated data includes, but is not limited to, aggregate anonymized data on how UTF8 is used, system logs, metadata, registration and login data, but does not include Input or Outputs. Use of UTF8 in no way transfers any intellectual property of The Qt Company to Customer other than the limited rights to use Qt Services (including UTF8) in accordance with these Terms and the Agreement.

6.2. Ownership of Customer

6.2.1. Except to the extent explicitly set forth in these Terms or the Agreement, as between the Customer and The Qt Company (and to the extent permitted by applicable law), Customer owns the Inputs and Customer's data and retains all proprietary rights, including intellectual property rights thereof.

6.2.2. By submitting an Input to UTF8, Customer represents and warrants that Customer has the right to submit the Input and further understands that Customer is doing so at its own risk and is solely responsible for this step and all consequences of its use in UTF8.

6.2.3. Customer rights to Outputs

6.2.3.1. The Outputs generated for Customer will be considered the Customer's Outputs, and The Qt Company will not claim any right to, title to, or interest in Customer's Outputs. Notwithstanding the foregoing, any The Qt Company Intellectual Property contained within the Outputs remains the intellectual property of The Qt Company and its licensors and is subject to the applicable terms and conditions regarding such intellectual property (e.g., the Agreement). Customer acknowledges that Outputs are generated as a non-exclusive response to the work with UTF8, so the same or similar Outputs, or other suggestions may also be generated for other UTF8 customers, based on inputs or context of use.

6.2.3.2. In regards to UTF8 Assistant, the Outputs are generated by the use of UTF8 Assistant in conjunction with Third-Party Software and as such, may be subject to third-party rights, including open-source licenses. Consequently, Customer must ensure that the Output generated by UTF8 Assistant does not violate third-party rights, such as open-source software licenses.

6.3. Feedback. Customer gives The Qt Company the right to use, change, modify, commercialize, and incorporate into UTF8 any of the ideas, suggestions, recommendations, proposals, or other feedback provided by Customer relating to UTF8-which shall constitute Submitted Modified Software. This permission is irrevocable and perpetual. The Qt Company is not required to pay a fee for this feedback and is entitled to transfer and give similar rights ("sublicense") to the Submitted Modified Software as it sees fit.

6.4.  Access to Data. If applicable to Qt AI offerings, Customer gives The Qt Company permission to access its Input to provide Customer with the Qt AI (e.g., for the purpose of providing the Customer with Support). The Qt Company will not use any of Customer's data to train The Qt Company's or third-party models unless explicitly agreed to do so in writing.

### 7. INDEMNIFICATION

7.1. The Qt Company shall indemnify and defend Customer from and against any third-party claims, actions, or demands alleging that the Qt AI, or any part thereof (but excluding any LLM or other Third-Party Software), infringes or misappropriates any intellectual property rights of any third party (a “Customer Claim”).

7.2. Customer shall indemnify and defend The Qt Company, its officers, directors, and employees (collectively, the "Qt Indemnified Parties") from and against any and all third-party claims, actions, or demands (including reasonable attorney's fees and court costs) arising out of or related to: (i) any misuse or improper use of Qt AI by Customer or by any third party acting on its behalf, including but not limited to the violation of any laws, regulations, or third-party rights (including intellectual property rights); (ii) the Inputs and Outputs Customer submits, transmits, generates, or uses in connection with Qt AI, including any alleged infringement of intellectual property rights, defamation, violation of privacy, fraudulent or malicious activities, or other legal rights of third parties; (iii) breach of these Terms by Customer, including but not limited to breaches of confidentiality, privacy, or intellectual property provisions; and (iv) any claim resulting from any action or the Customer's Input into or Outputs from the Qt AI that results in harm to The Qt Company, other users, or third parties, such as engaging in illegal, fraudulent, or malicious activities, including those resulting from Submitted Modified Software (each, a “Qt Claim”).

7.3. Customer Claims and Qt Claims are collectively referred to herein as "Claim(s)."

7.4. The party seeking indemnification shall promptly notify the other party of a Claim, allow the other party sole right to control the defense and provide reasonable information and assistance (at the indemnifying party's expense) in the defense of the Claim.

7.5. Provided that the party seeking indemnification has done so, the indemnifying party shall indemnify any amounts the party seeking indemnification is ordered to pay to a third party right-holder in a non-cancellable decision of the applicable court or in a valid out-of-court settlement.

7.6. The Qt Company shall have no obligation to defend or indemnify Customer to the extent that a Claim is based on: (i) any modification to the Qt AI and/or other Services made by anyone other than The Qt Company, or any version of the Qt AI and/or Services other than the unmodified and updated Qt AI and/or Services delivered by The Qt Company; (ii) the particular use made by Customer of the Qt AI and/or Services; (iii) the functionality created by Customer using the Qt AI and/or Services, in Customer's Device or Application; (iv) any Third-Party Software; (v) the use of any version of the Qt AI and/or Services which has been superseded by a new or updated version of Qt AI and/or Services that The Qt Company has made generally available under Support; or (vi) any Intellectual Property Right in which Customer or any Affiliate of Customer has a proprietary interest. In the event that a Claim arises, or, in The Qt Company's reasonable opinion is likely to arise, The Qt Company shall either (i) modify the Qt AI and/or Services to avoid infringement while providing substantially equivalent functionality; (ii) obtain for Customer the right to use the Qt AI free of any claim of infringement; or (iii) if neither of the foregoing is reasonably available, accept return of the Qt AI and/or Services from Customer and refund to Customer all fees paid with respect to the Services not useable by Customer as a result of the infringement. Notwithstanding any of the foregoing, for any and all Claims based on the allegation that the Qt AI and/or Services or its use infringes on the patent rights of a third party, The Qt Company's total maximum liability towards the Customer under these Terms  shall be limited to (i) the costs of performing its obligations under this Section 7, and, in addition (ii) an amount equal to the Fees paid by Customer under the Agreement. This Section states the entire liability of The Qt Company with respect to indemnification or liability for infringement of Intellectual Property Rights by the Qt AI or any part thereof or by their use or operation.

### 8. RISKS AND DISCLAIMERS

8.1. UTF8 and any Support provided in connection with it are made available on an 'as is' basis. Customer accesses and uses UTF8 at its own risk.

8.2. Except as expressly stated in these Terms, The Qt Company makes no representations and provide no warranties regarding UTF8-whether express, implied, statutory, or otherwise. This includes, but is not limited to, warranties that UTF8 will operate without interruption, will be error-free, or will be free of harmful components, and The Qt Company make no warranties regarding the security, loss, or damage to Customer's Input, Output, and other data. To the maximum extent permitted by law, the Qt Company expressly disclaims all warranties including, but not limited to, any implied warranties of merchantability, satisfactory quality, fitness for a particular purpose, non-infringement, and any warranties arising from a course of dealing or usage of trade.

8.3. The Qt Company advises Customer not to rely on its Outputs without independent human verification, as Outputs may be inaccurate, incomplete, or outdated. The Qt Company recommends having policies to prevent using Output in ways that violate others' rights.

8.4. The foregoing does not apply to any representations or warranties that cannot be excluded or limited under applicable law.

### 9. LIMITATION OF LIABILITY 

9.1. EXCEPT FOR (I) CASES OF GROSS NEGLIGENCE OR INTENTIONAL MISCONDUCT, (II) A BREACH OR VIOLATION OF THE OTHER PARTY'S INTELLECTUAL PROPERTY RIGHTS, OR (III) WHERE REQUIRED BY APPLICABLE LAW, IN NO EVENT SHALL EITHER PARTY BE LIABLE TO THE OTHER PARTY FOR ANY LOST PROFITS, LOSS OF DATA, LOSS OF BUSINESS OR GOODWILL OR ANY OTHER INDIRECT, SPECIAL, CONSEQUENTIAL, INCIDENTAL OR PUNITIVE COST, DAMAGES OR EXPENSE OF ANY KIND, HOWSOEVER ARISING UNDER OR IN CONNECTION WITH THESE TERMS.

9.2. EXCEPT FOR (I) CASES OF GROSS NEGLIGENCE OR INTENTIONAL MISCONDUCT, (II) A BREACH OR VIOLATION OF THE OTHER PARTY'S INTELLECTUAL PROPERTY RIGHTS, AND TO THE EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL EITHER PARTY'S TOTAL AGGREGATE LIABILITY UNDER THESE TERMS  EXCEED THE AGGREGATE FEES PAID OR PAYABLE TO THE QT COMPANY BY CUSTOMER UNDER THE AGREEMENT. THE FOREGOING LIMITATION WILL NOT APPLY TO CUSTOMER'S OBLIGATION TO PAY THE APPLICABLE FEES CORRESPONDING TO ITS ACTUAL USE OF LICENSED SOFTWARE OR SERVICES.

### 10.	MISCELLANEOUS

10.1 These Terms are an integral and inseparable part of the Agreement and except to the extent modified herein, all provisions of the Agreement are applicable to these Terms. 
        ]]
    },
    LongDescription = [[UTF8 IS LONG!]],
    Dependencies = {
        { Id = "lua",               Version = "15.0.0" },
        { Id = "lualanguageclient", Version = "15.0.0" }
    }
} --[[@as QtcPlugin]]
