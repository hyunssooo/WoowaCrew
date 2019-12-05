package woowacrew.oauth.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.view.RedirectView;
import woowacrew.security.SecurityContextSupport;
import woowacrew.user.domain.UserContext;
import woowacrew.user.domain.UserRole;

//임시 권한 변경을 위한 controller
@Controller
public class TempController {
    @GetMapping("/role/precourse")
    public RedirectView precourse(UserContext userContext) {
        userContext.setRole(UserRole.ROLE_PRECOURSE);
        SecurityContextSupport.updateContext(userContext);
        return new RedirectView("/");
    }

    @GetMapping("/role/crew")
    public RedirectView crew(UserContext userContext) {
        userContext.setRole(UserRole.ROLE_CREW);
        SecurityContextSupport.updateContext(userContext);
        return new RedirectView("/");
    }

    @GetMapping("/role/coach")
    public RedirectView coach(UserContext userContext) {
        userContext.setRole(UserRole.ROLE_COACH);
        SecurityContextSupport.updateContext(userContext);
        return new RedirectView("/");
    }

    @GetMapping("/role/admin")
    public RedirectView admin(UserContext userContext) {
        userContext.setRole(UserRole.ROLE_ADMIN);
        SecurityContextSupport.updateContext(userContext);
        return new RedirectView("/");
    }
}