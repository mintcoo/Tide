package com.tide.diary.jpa;

import com.tide.diary.jpa.comment.DiaryComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiaryRepository extends JpaRepository<Diary, Long> {
    List<Diary> findAllByUserId(Long userId);
    List<Diary> findAllByUserIdAndPub(Long userId, String pub);
    List<Diary> findAllByPub(String s);
}