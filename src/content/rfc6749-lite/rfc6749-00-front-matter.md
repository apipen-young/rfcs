---
title: RFC 6749 - 00. Front Matter
description: Abstract, Status of This Memo, and Copyright of Notice of RFC 6749
date: Jul 05 2025
---

# The OAuth 2.0 Authorization Framework

### \-note-

**RFC**는 **Request for Comments** 의 약자로. 인터넷에서 사용되는 표준 기술(e.g., HTTP, JWT, OAuth 2.0등)을 정의하는 **명세(Specification)**입니다. IETF(Internet Engineering Task Force)가 만들고 승인합니다.

명세(Specification)란 개발자들이 특정 기술을 동일한 방식으로 구현할 수 있게 정해둔 규칙을 적어둔 문서입니다.


## Abstract

**OAuth 2.0 authorization framework**(**인가 프레임워크**)는 써드파티 애플리케이션이 HTTP 서비스에 제한적으로, 일부만 이용하게 해줍니다.

### \-note\-

Authorization framework(**인가 프레임워크**)는 **사용자**나 **프로그램**이 특정 **기능**이나 **데이터**를 **사용할 수 있는지** 확인하고 관리하는 프레임워크입니다.

Authorization framework는 인증 프레임 워크라고 불리기도 하지만, 엄밀히 말하자면 **인가**가 더 정확한 표현입니다.

**써드파티 애플리케이션**과 **HTTP 서비스**가 어떤 것을 지칭하는 것인지는 추후 단락에서 알아보겠습니다.

엄밀히 말하면 OAuth 2.1이 현재 최신 기술입니다. 하지만 OAuth 2.1에 대한 공식 문서는 아직 존재하지 않고 (draft 상태입니다), OAuth 2.0을 이해한다면 OAuth 2.1도 쉽게 이해할 수 있기 때문에 OAuth 2.0을 토대로 OAuth 인가 프레임워크에 대해 배우는 것이 중요합니다.

OAuth 1.0은 현재 거의 사용되지 않는 기술입니다. 또한 OAuth 1.0과 2.0은 기술적으로 상당히 다르기 때문에, OAuth 2.0을 이해하기 위해 OAuth 1.0을 알 필요는 거의 없습니다.

## Status of This Memo

## Copyright of Notice
