package woowacrew.user.utils;

import org.modelmapper.ModelMapper;
import woowacrew.degree.utils.DegreeConverter;
import woowacrew.user.domain.User;
import woowacrew.user.dto.UserContext;
import woowacrew.user.dto.UserResponseDto;

import java.util.List;
import java.util.stream.Collectors;

public class UserConverter {
    private UserConverter() {
    }

    public static UserContext toContextDto(User user) {
        return new ModelMapper().map(user, UserContext.class);
    }

    public static UserResponseDto toDto(User user) {
        UserResponseDto responseDto = new ModelMapper().map(user, UserResponseDto.class);
        responseDto.setDegreeResponseDto(DegreeConverter.toDto(user.getDegree()));
        return responseDto;
    }

    public static List<UserResponseDto> toDtos(List<User> users) {
        return users.stream()
                .map(UserConverter::toDto)
                .collect(Collectors.toList());
    }
}
