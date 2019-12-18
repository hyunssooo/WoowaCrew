package woowacrew.comment.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import woowacrew.comment.dto.CommentRequestDto;
import woowacrew.comment.dto.CommentResponseDto;
import woowacrew.comment.dto.CommentUpdateDto;
import woowacrew.comment.service.CommentService;
import woowacrew.user.dto.UserContext;

import java.util.List;

@RequestMapping("api/comments")
@RestController
public class CommentApiController {
    private CommentService commentService;

    public CommentApiController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public ResponseEntity<CommentResponseDto> create(CommentRequestDto commentRequestDto, UserContext userContext) {
        return ResponseEntity.ok(commentService.save(commentRequestDto, userContext));
    }

    @GetMapping
    public ResponseEntity<List<CommentResponseDto>> showAllByArticles(Long articleId) {
        return ResponseEntity.ok(commentService.findAll(articleId));
    }

    @PutMapping
    public ResponseEntity<CommentResponseDto> update(CommentUpdateDto commentUpdateDto, UserContext userContext) {
        return ResponseEntity.ok(commentService.update(commentUpdateDto, userContext));
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity delete(UserContext userContext, @PathVariable Long commentId) {
        commentService.delete(commentId, userContext);
        return ResponseEntity.ok().build();
    }
}
