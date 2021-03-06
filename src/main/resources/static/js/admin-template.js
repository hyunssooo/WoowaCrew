const AdminTemplates = (() => {
  class Templates {
    signRequestListTemplate(user) {
      return `<div class="info-content" id="user-${user.id}">
                <div class="info-cell">${user.oauthId}</div>
                <input class="user-id" type="hidden" value=${user.id}>
                <div class="info-cell margin-left-10">${user.nickname}</div>
                <div class="degree-select-box">
                    <select class="degree">
                        <option value="0">크루 아님</option>
                        <option value="1">1기</option>
                    </select>
                </div>
                <div class="role-select-box">
                    <select class="role">
                        <option value="ROLE_PRECOURSE">프리코스</option>
                        <option value="ROLE_CREW">크루</option>
                        <option value="ROLE_COACH">코치</option>
                        <option value="ROLE_ADMIN">관리자</option>
                    </select>
                </div>
                <button class="approve-button" onclick="AdminApp.approveUser(${user.id})">승인</button>
            </div>`
    }

    approvedUserListTemplate(user) {
      return `<div class="info-content" id="user-${user.id}">
                <div class="info-cell">${user.oauthId}</div>
                <input class="user-id" type="hidden" value=${user.id}>
                <div class="info-cell margin-left-10">${user.nickname}</div>
                <div class="degree-select-box">
                    <select class="degree">
                        <option value="0">크루 아님</option>
                        <option value="1">1기</option>
                    </select>
                </div>                
                <div class="role-select-box">
                    <select class="role">
                        <option value="ROLE_PRECOURSE">프리코스</option>
                        <option value="ROLE_CREW">크루</option>
                        <option value="ROLE_COACH">코치</option>
                        <option value="ROLE_ADMIN">관리자</option>
                    </select>
                </div>
                <button class="approve-button" onclick="AdminApp.updateUserAuthority(${user.id})">수정</button>
            </div>`
    }

    userInfoTitle() {
      return `<div class="info-title-id cell">아이디</div>
                <div class="info-title-nickname cell">닉네임</div>
                <div class="info-title-degree cell">기수</div>
                <div class="info-title-role cell">권한</div>`
    }

    degreeInfoTitle() {
      return `<div class="info-title-id cell">기수</div>
                <div class="info-title-degree cell">인원</div> `
    }

    degreeListTemplate(degree) {
      return `<div class="info-content" id="degree-${degree.id}">
                <div class="info-cell">${this.convertDegree(degree.degreeNumber)}</div>
                <div class="info-cell margin-left-10">${degree.userCount}</div>
                <div class="info-cell margin-left-10 hover-pointer" onclick="AdminApp.showDetailUsersOfDegree(${degree.id})">상세 보기</div>
            </div>`
    }

    addFeedForm() {
      return `
            <div id="rss-input-form">
            <div class="feed-form-row">
                <div class="feed-form-info">sourceUrl</div>
                <input type="text" id="source-url" class="feed-source-input">
            </div>
            <div class="feed-form-row">
                <div class="feed-form-info">간단 설명</div>
                <input type="text" id="description" class="feed-source-input">
            </div>
                <button type="button" class="feed-submit-button" onclick='AdminApp.addFeedSource()'>등록</button>
            </div>
      `
    }


    feedSourceInfoTitle() {
      return `<div class="info-title-source-url cell">sourceUrl</div>
                <div class="info-title-description cell">설명</div>
                <div class="cell info-cell margin-left-10 hover-pointer hover-red" onclick="AdminApp.updateFeedArticles()">피드 업데이트</div>
                 `;
    }

    feedSourceListTemplate(feedSource) {
      return `<div class="info-content" id="feed-source-${feedSource.id}">
                <div class="info-cell">${feedSource.sourceUrl}</div>
                <input type="text" class="info-cell margin-left-10 feed-description-summary" value="${feedSource.description}">
                <div class="info-cell margin-left-10 hover-pointer" onclick="AdminApp.editFeedSource(${feedSource.id})">수정</div>
                <div class="info-cell margin-left-10 hover-pointer" onclick="AdminApp.deleteFeedSource(${feedSource.id})">삭제</div>
            </div>`
    }

    convertDegree(degreeNumber) {
      if (degreeNumber === 0) {
        return '크루 아님'
      }
      return degreeNumber + '기'
    }

    selectRole(template, userRole) {
      let element = document.createElement('div')
      element.innerHTML = template;
      const roleSelectedBox = element.querySelector('.role')
      const options = roleSelectedBox.options
      for (const option of options) {
        if (option.value === userRole) {
          option.selected = true
        }
      }
      return element
    }

    selectDegree(element, degreeNumber) {
      const degreeSelectedBox = element.querySelector('.degree')
      const options = degreeSelectedBox.options
      for (const option of options) {
        if (parseInt(option.value) === degreeNumber) {
          option.selected = true
        }
      }
    }

    anonymousArticleInfoTitle() {
      return `<div class="info-title-id cell">아이디</div>
                <div class="info-title-title cell">제목</div>`
    }

    anonymousArticleListTemplate(anonymousArticle) {
      return `<div class="info-content" id="anonymousArticle-${anonymousArticle.anonymousArticleId}">
                <div class="info-cell">${anonymousArticle.anonymousArticleId}</div>
                <div class="info-cell margin-left-10">${anonymousArticle.title}</div>
                <button class="confirm-button" onclick="AdminApp.confirmAnonymousArticle(${anonymousArticle.anonymousArticleId})">게시글 확인</button>
                <button class="approve-button" onclick="AdminApp.approveAnonymousArticle(${anonymousArticle.anonymousArticleId})">승인</button>
            </div>`
    }
  }

  return new Templates()
})()