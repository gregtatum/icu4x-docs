(function() {var implementors = {};
implementors["fixed_decimal"] = [{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FixedDecimal","synthetic":true,"types":[]}];
implementors["icu4x_cldr_export"] = [{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["icu4x_ecma402"] = [{"text":"impl UnwindSafe for Locale","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PluralRules","synthetic":true,"types":[]}];
implementors["icu4x_gen_testdata"] = [{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["icu_datetime"] = [{"text":"impl&lt;'l, T&gt; UnwindSafe for FormattedDateTime&lt;'l, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'d&gt; UnwindSafe for DateTimeFormat&lt;'d&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for DateTimeFormatError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DateTimeFormatOptions","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MockDateTime","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Month","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WeekDay","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Day","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Hour","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Minute","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Second","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DateTimeError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Bag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Numeric","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Text","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Month","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TimeZoneName","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Bag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HourCycle","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Bag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Date","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Time","synthetic":true,"types":[]}];
implementors["icu_locale_canonicalizer"] = [{"text":"impl&lt;'a&gt; UnwindSafe for LocaleCanonicalizer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CanonicalizationResult","synthetic":true,"types":[]}];
implementors["icu_locid"] = [{"text":"impl UnwindSafe for LanguageIdentifier","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Locale","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParserError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Extensions","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExtensionType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Key","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Private","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Fields","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Key","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Value","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Transform","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Attribute","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Attributes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Key","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Keywords","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Value","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Unicode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Language","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Region","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Script","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Variant","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Variants","synthetic":true,"types":[]}];
implementors["icu_plurals"] = [{"text":"impl UnwindSafe for PluralOperands","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PluralRules","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for PluralRulesError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PluralRuleType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PluralCategory","synthetic":true,"types":[]},{"text":"impl&lt;'l&gt; UnwindSafe for Lexer&lt;'l&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Rule","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Condition","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AndCondition","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Relation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Expression","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RangeList","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Value","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Samples","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SampleList","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SampleRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DecimalValue","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Operator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Operand","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RangeListItem","synthetic":true,"types":[]}];
implementors["icu_provider"] = [{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataResponseMetadata","synthetic":true,"types":[]},{"text":"impl&lt;'d, T:&nbsp;?Sized&gt; UnwindSafe for DataResponse&lt;'d, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ToOwned&gt;::Owned: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ResourceKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ResourceKeyComponents","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ResourceOptions","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ResourceOptionsComponents","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ResourcePath","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ResourceCategory","synthetic":true,"types":[]},{"text":"impl&lt;'d, T:&nbsp;?Sized&gt; UnwindSafe for DataReceiver&lt;'d, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ToOwned&gt;::Owned: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'s&gt; UnwindSafe for HelloWorldProvider&lt;'s&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InvariantDataProvider","synthetic":true,"types":[]},{"text":"impl&lt;'d, T&gt; UnwindSafe for StructProvider&lt;'d, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DatesV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DateSymbolsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PatternsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SymbolsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FormatWidthsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StandAloneWidthsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ContextsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SymbolsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FormatWidthsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StandAloneWidthsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ContextsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SymbolsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FormatWidthsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StandAloneWidthsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ContextsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StylePatternsV1","synthetic":true,"types":[]},{"text":"impl&lt;'s&gt; UnwindSafe for HelloWorldV1&lt;'s&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LikelySubtagsV1","synthetic":true,"types":[]},{"text":"impl&lt;'s&gt; UnwindSafe for PluralRuleStringsV1&lt;'s&gt;","synthetic":true,"types":[]}];
implementors["icu_provider_cldr"] = [{"text":"impl UnwindSafe for CldrPathsLocal","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl&lt;'d&gt; UnwindSafe for DatesProvider&lt;'d&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'d&gt; UnwindSafe for LikelySubtagsProvider&lt;'d&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'d&gt; UnwindSafe for PluralsProvider&lt;'d&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'd&gt; !UnwindSafe for CldrJsonDataProvider&lt;'a, 'd&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CldrAllInOneDownloader","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["icu_provider_fs"] = [{"text":"impl UnwindSafe for FsDataProvider","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AliasOption","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LocalesOption","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SyntaxOption","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExporterOptions","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for FilesystemExporter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OverwriteOption","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Serializer","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Options","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StyleOption","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Serializer","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Options","synthetic":true,"types":[]}];
implementors["icu_segmenter_lstm"] = [{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Lstm","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LstmData","synthetic":true,"types":[]}];
implementors["icu_testdata"] = [{"text":"impl UnwindSafe for PackageMetadata","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PackageInfo","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["icu_uniset"] = [{"text":"impl UnwindSafe for UnicodeSetBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnicodeSet","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnicodeSetError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnicodeSetSpanCondition","synthetic":true,"types":[]}];
implementors["writeable"] = [{"text":"impl UnwindSafe for LengthHint","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()