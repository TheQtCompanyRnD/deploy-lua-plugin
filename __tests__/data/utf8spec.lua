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
            These utf8 codepoints may be a problem: “Customer”
        ]]
    },
    LongDescription = [[UTF8 IS LONG!]],
    Dependencies = {
        { Id = "lua",               Version = "15.0.0" },
        { Id = "lualanguageclient", Version = "15.0.0" }
    }
} --[[@as QtcPlugin]]
