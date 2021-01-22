(function() {var implementors = {};
implementors["fixed_decimal"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for FixedDecimal","synthetic":true,"types":[]}];
implementors["icu4x_cldr_export"] = [{"text":"impl !Send for Error","synthetic":true,"types":[]}];
implementors["icu4x_ecma402"] = [{"text":"impl Send for Locale","synthetic":true,"types":[]},{"text":"impl Send for PluralRules","synthetic":true,"types":[]}];
implementors["icu4x_gen_testdata"] = [{"text":"impl !Send for Error","synthetic":true,"types":[]}];
implementors["icu_datetime"] = [{"text":"impl&lt;'l, T&gt; Send for FormattedDateTime&lt;'l, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'d&gt; Send for DateTimeFormat&lt;'d&gt;","synthetic":true,"types":[]},{"text":"impl !Send for DateTimeFormatError","synthetic":true,"types":[]},{"text":"impl Send for DateTimeFormatOptions","synthetic":true,"types":[]},{"text":"impl Send for MockDateTime","synthetic":true,"types":[]},{"text":"impl Send for Month","synthetic":true,"types":[]},{"text":"impl Send for WeekDay","synthetic":true,"types":[]},{"text":"impl Send for Day","synthetic":true,"types":[]},{"text":"impl Send for Hour","synthetic":true,"types":[]},{"text":"impl Send for Minute","synthetic":true,"types":[]},{"text":"impl Send for Second","synthetic":true,"types":[]},{"text":"impl Send for DateTimeError","synthetic":true,"types":[]},{"text":"impl Send for Bag","synthetic":true,"types":[]},{"text":"impl Send for Numeric","synthetic":true,"types":[]},{"text":"impl Send for Text","synthetic":true,"types":[]},{"text":"impl Send for Month","synthetic":true,"types":[]},{"text":"impl Send for TimeZoneName","synthetic":true,"types":[]},{"text":"impl Send for Bag","synthetic":true,"types":[]},{"text":"impl Send for HourCycle","synthetic":true,"types":[]},{"text":"impl Send for Bag","synthetic":true,"types":[]},{"text":"impl Send for Date","synthetic":true,"types":[]},{"text":"impl Send for Time","synthetic":true,"types":[]}];
implementors["icu_locale_canonicalizer"] = [{"text":"impl&lt;'a&gt; Send for LocaleCanonicalizer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for CanonicalizationResult","synthetic":true,"types":[]}];
implementors["icu_locid"] = [{"text":"impl Send for LanguageIdentifier","synthetic":true,"types":[]},{"text":"impl Send for Locale","synthetic":true,"types":[]},{"text":"impl Send for ParserError","synthetic":true,"types":[]},{"text":"impl Send for Extensions","synthetic":true,"types":[]},{"text":"impl Send for ExtensionType","synthetic":true,"types":[]},{"text":"impl Send for Key","synthetic":true,"types":[]},{"text":"impl Send for Private","synthetic":true,"types":[]},{"text":"impl Send for Fields","synthetic":true,"types":[]},{"text":"impl Send for Key","synthetic":true,"types":[]},{"text":"impl Send for Value","synthetic":true,"types":[]},{"text":"impl Send for Transform","synthetic":true,"types":[]},{"text":"impl Send for Attribute","synthetic":true,"types":[]},{"text":"impl Send for Attributes","synthetic":true,"types":[]},{"text":"impl Send for Key","synthetic":true,"types":[]},{"text":"impl Send for Keywords","synthetic":true,"types":[]},{"text":"impl Send for Value","synthetic":true,"types":[]},{"text":"impl Send for Unicode","synthetic":true,"types":[]},{"text":"impl Send for Language","synthetic":true,"types":[]},{"text":"impl Send for Region","synthetic":true,"types":[]},{"text":"impl Send for Script","synthetic":true,"types":[]},{"text":"impl Send for Variant","synthetic":true,"types":[]},{"text":"impl Send for Variants","synthetic":true,"types":[]}];
implementors["icu_plurals"] = [{"text":"impl Send for PluralOperands","synthetic":true,"types":[]},{"text":"impl Send for PluralRules","synthetic":true,"types":[]},{"text":"impl !Send for PluralRulesError","synthetic":true,"types":[]},{"text":"impl Send for PluralRuleType","synthetic":true,"types":[]},{"text":"impl Send for PluralCategory","synthetic":true,"types":[]},{"text":"impl&lt;'l&gt; Send for Lexer&lt;'l&gt;","synthetic":true,"types":[]},{"text":"impl Send for Rule","synthetic":true,"types":[]},{"text":"impl Send for Condition","synthetic":true,"types":[]},{"text":"impl Send for AndCondition","synthetic":true,"types":[]},{"text":"impl Send for Relation","synthetic":true,"types":[]},{"text":"impl Send for Expression","synthetic":true,"types":[]},{"text":"impl Send for RangeList","synthetic":true,"types":[]},{"text":"impl Send for Value","synthetic":true,"types":[]},{"text":"impl Send for Samples","synthetic":true,"types":[]},{"text":"impl Send for SampleList","synthetic":true,"types":[]},{"text":"impl Send for SampleRange","synthetic":true,"types":[]},{"text":"impl Send for DecimalValue","synthetic":true,"types":[]},{"text":"impl Send for Operator","synthetic":true,"types":[]},{"text":"impl Send for Operand","synthetic":true,"types":[]},{"text":"impl Send for RangeListItem","synthetic":true,"types":[]}];
implementors["icu_provider"] = [{"text":"impl !Send for Error","synthetic":true,"types":[]},{"text":"impl Send for DataRequest","synthetic":true,"types":[]},{"text":"impl Send for DataResponseMetadata","synthetic":true,"types":[]},{"text":"impl&lt;'d, T:&nbsp;?Sized&gt; Send for DataResponse&lt;'d, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ToOwned&gt;::Owned: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ResourceKey","synthetic":true,"types":[]},{"text":"impl Send for ResourceKeyComponents","synthetic":true,"types":[]},{"text":"impl Send for ResourceOptions","synthetic":true,"types":[]},{"text":"impl Send for ResourceOptionsComponents","synthetic":true,"types":[]},{"text":"impl Send for ResourcePath","synthetic":true,"types":[]},{"text":"impl Send for ResourceCategory","synthetic":true,"types":[]},{"text":"impl&lt;'d, T:&nbsp;?Sized&gt; Send for DataReceiver&lt;'d, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ToOwned&gt;::Owned: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'s&gt; Send for HelloWorldProvider&lt;'s&gt;","synthetic":true,"types":[]},{"text":"impl Send for InvariantDataProvider","synthetic":true,"types":[]},{"text":"impl&lt;'d, T&gt; Send for StructProvider&lt;'d, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for DatesV1","synthetic":true,"types":[]},{"text":"impl Send for DateSymbolsV1","synthetic":true,"types":[]},{"text":"impl Send for PatternsV1","synthetic":true,"types":[]},{"text":"impl Send for SymbolsV1","synthetic":true,"types":[]},{"text":"impl Send for FormatWidthsV1","synthetic":true,"types":[]},{"text":"impl Send for StandAloneWidthsV1","synthetic":true,"types":[]},{"text":"impl Send for ContextsV1","synthetic":true,"types":[]},{"text":"impl Send for SymbolsV1","synthetic":true,"types":[]},{"text":"impl Send for FormatWidthsV1","synthetic":true,"types":[]},{"text":"impl Send for StandAloneWidthsV1","synthetic":true,"types":[]},{"text":"impl Send for ContextsV1","synthetic":true,"types":[]},{"text":"impl Send for SymbolsV1","synthetic":true,"types":[]},{"text":"impl Send for FormatWidthsV1","synthetic":true,"types":[]},{"text":"impl Send for StandAloneWidthsV1","synthetic":true,"types":[]},{"text":"impl Send for ContextsV1","synthetic":true,"types":[]},{"text":"impl Send for StylePatternsV1","synthetic":true,"types":[]},{"text":"impl&lt;'s&gt; Send for HelloWorldV1&lt;'s&gt;","synthetic":true,"types":[]},{"text":"impl Send for LikelySubtagsV1","synthetic":true,"types":[]},{"text":"impl&lt;'s&gt; Send for PluralRuleStringsV1&lt;'s&gt;","synthetic":true,"types":[]}];
implementors["icu_provider_cldr"] = [{"text":"impl Send for CldrPathsLocal","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;'d&gt; Send for DatesProvider&lt;'d&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'d&gt; Send for LikelySubtagsProvider&lt;'d&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'d&gt; Send for PluralsProvider&lt;'d&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'd&gt; !Send for CldrJsonDataProvider&lt;'a, 'd&gt;","synthetic":true,"types":[]},{"text":"impl Send for CldrAllInOneDownloader","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]}];
implementors["icu_provider_fs"] = [{"text":"impl Send for FsDataProvider","synthetic":true,"types":[]},{"text":"impl !Send for Error","synthetic":true,"types":[]},{"text":"impl Send for AliasOption","synthetic":true,"types":[]},{"text":"impl Send for LocalesOption","synthetic":true,"types":[]},{"text":"impl Send for SyntaxOption","synthetic":true,"types":[]},{"text":"impl Send for ExporterOptions","synthetic":true,"types":[]},{"text":"impl !Send for FilesystemExporter","synthetic":true,"types":[]},{"text":"impl Send for OverwriteOption","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Serializer","synthetic":true,"types":[]},{"text":"impl Send for Options","synthetic":true,"types":[]},{"text":"impl Send for StyleOption","synthetic":true,"types":[]},{"text":"impl Send for Serializer","synthetic":true,"types":[]},{"text":"impl Send for Options","synthetic":true,"types":[]}];
implementors["icu_segmenter_lstm"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Lstm","synthetic":true,"types":[]},{"text":"impl Send for LstmData","synthetic":true,"types":[]}];
implementors["icu_testdata"] = [{"text":"impl Send for PackageMetadata","synthetic":true,"types":[]},{"text":"impl Send for PackageInfo","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]}];
implementors["icu_uniset"] = [{"text":"impl Send for UnicodeSetBuilder","synthetic":true,"types":[]},{"text":"impl Send for UnicodeSet","synthetic":true,"types":[]},{"text":"impl Send for UnicodeSetError","synthetic":true,"types":[]},{"text":"impl Send for UnicodeSetSpanCondition","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()