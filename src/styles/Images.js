
/*
 * Copyright (C) 2013 Tomasz Olszak <olszak.tomasz@gmail.com>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Library General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 * You should have received a copy of the GNU Library General Public License
 * along with this library; see the file COPYING.LIB.  If not, write to
 * the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
 * Boston, MA 02110-1301, USA.
 */

function getImages(theme,imagesPath) {
    var images = {
        img_00_arrow_left: imagesPath + "00_arrow_left.png",
        img_00_arrow_right: imagesPath + "00_arrow_right.png",
        img_00_badge_bg_9: imagesPath + "00_badge_bg.9.sci",
        img_00_badge_bg_ef_9: imagesPath + theme + "/" + "00_badge_bg_ef.9.sci",
        img_00_button_01_9: imagesPath + "00_button_01.9.sci",
        img_00_button_01_bg_9: imagesPath + "00_button_01_bg.9.sci",
        img_00_button_01_dim_ef_9: imagesPath + theme + "/" + "00_button_01_dim_ef.9.sci",
        img_00_button_01_ef_9: imagesPath + theme + "/" + "00_button_01_ef.9.sci",
        img_00_button_01_focus_9: imagesPath + "00_button_01_focus.9.sci",
        img_00_button_01_press_ef_9: imagesPath + theme + "/" + "00_button_01_press_ef.9.sci",
        img_00_button_expand_closed: imagesPath + "00_button_expand_closed.png",
        img_00_button_expand_closed_ef: imagesPath + theme + "/" + "00_button_expand_closed_ef.png",
        img_00_button_expand_opened: imagesPath + "00_button_expand_opened.png",
        img_00_button_expand_opened_ef: imagesPath + theme + "/" + "00_button_expand_opened_ef.png",
        img_00_button_left: imagesPath + "00_button_left.png",
        img_00_button_left_ef: imagesPath + theme + "/" + "00_button_left_ef.png",
        img_00_button_off: imagesPath + theme + "/" + "00_button_off.png",
        img_00_button_off_dim: imagesPath + theme + "/" + "00_button_off_dim.png",
        img_00_button_off_handler: imagesPath + theme + "/" + "00_button_off_handler.png",
        img_00_button_off_handler_dim: imagesPath + theme + "/" + "00_button_off_handler_dim.png",
        img_00_button_of_off_handler_focus: imagesPath + "00_button_of_off_handler_focus.png",
        img_00_button_on: imagesPath + theme + "/" + "00_button_on.png",
        img_00_button_on_dim: imagesPath + theme + "/" + "00_button_on_dim.png",
        img_00_button_on_handler: imagesPath + theme + "/" + "00_button_on_handler.png",
        img_00_button_on_handler_dim: imagesPath + theme + "/" + "00_button_on_handler_dim.png",
        img_00_button_on_off_bg: imagesPath + theme + "/" + "00_button_on_off_bg.png",
        img_00_button_on_off_bg_dim: imagesPath + theme + "/" + "00_button_on_off_bg_dim.png",
        img_00_button_on_off_handler: imagesPath + theme + "/" + "00_button_on_off_handler.png",
        img_00_button_on_off_handler_dim: imagesPath + theme + "/" + "00_button_on_off_handler_dim.png",
        img_00_button_on_off_handler_focus: imagesPath + "00_button_on_off_handler_focus.png",
        img_00_button_radio_activated: imagesPath + theme + "/" + "00_button_radio_activated.png",
        img_00_button_radio_Activated: imagesPath + theme + "/" + "00_button_radio_Activated.png",
        img_00_button_radio_activated_dim: imagesPath + theme + "/" + "00_button_radio_activated_dim.png",
        img_00_button_radio_Activated_dim: imagesPath + theme + "/" + "00_button_radio_Activated_dim.png",
        img_00_button_radio_activated_press: imagesPath + theme + "/" + "00_button_radio_activated_press.png",
        img_00_button_radio_bg: imagesPath + theme + "/" + "00_button_radio_bg.png",
        img_00_button_radio_dim_bg: imagesPath + theme + "/" + "00_button_radio_dim_bg.png",
        img_00_button_radio_focus: imagesPath + "00_button_radio_focus.png",
        img_00_button_radio_normal1: imagesPath + theme + "/" + "00_button_radio_normal1.png",
        img_00_button_radio_normal2: imagesPath + theme + "/" + "00_button_radio_normal2.png",
        img_00_button_radio_press: imagesPath + theme + "/" + "00_button_radio_press.png",
        img_00_button_radio_press_bg: imagesPath + theme + "/" + "00_button_radio_press_bg.png",
        img_00_button_reveal: imagesPath + "00_button_reveal.png",
        img_00_button_right: imagesPath + "00_button_right.png",
        img_00_button_right_ef: imagesPath + theme + "/" + "00_button_right_ef.png",
        img_00_category_button_9: imagesPath + "00_category_button.9.sci",
        img_00_category_button_focus_9: imagesPath + "00_category_button_focus.9.sci",
        img_00_category_panel_bg_9: imagesPath + "00_category_panel_bg.9.sci",
        img_00_category_panel_bg_ef_9: imagesPath + "00_category_panel_bg_ef.9.sci",
        img_00_check_activated: imagesPath + theme + "/" + "00_check_activated.png",
        img_00_check_Activated: imagesPath + theme + "/" + "00_check_Activated.png",
        img_00_check_activated_dim: imagesPath + theme + "/" + "00_check_activated_dim.png",
        img_00_check_Activated_dim: imagesPath + theme + "/" + "00_check_Activated_dim.png",
        img_00_check_activated_press: imagesPath + theme + "/" + "00_check_activated_press.png",
        img_00_check_bg: imagesPath + theme + "/" + "00_check_bg.png",
        img_00_check_dim: imagesPath + theme + "/" + "00_check_dim.png",
        img_00_check_dim_bg: imagesPath + theme + "/" + "00_check_dim_bg.png",
        img_00_check_focus: imagesPath + "00_check_focus.png",
        img_00_check_press: imagesPath + theme + "/" + "00_check_press.png",
        img_00_check_press_bg: imagesPath + theme + "/" + "00_check_press_bg.png",
        img_00_circle_bg: imagesPath + "00_circle_bg.png",
        img_00_circle_bg_ef: imagesPath + theme + "/" + "00_circle_bg_ef.png",
        img_00_circle_bg_ef_dim: imagesPath + theme + "/" + "00_circle_bg_ef_dim.png",
        img_00_circle_bg_ef_press: imagesPath + theme + "/" + "00_circle_bg_ef_press.png",
        img_00_circle_button_focus: imagesPath + "00_circle_button_focus.png",
        img_00_color_picker_brightness: imagesPath + "00_color_picker_brightness.png",
        img_00_color_picker_brightness_h: imagesPath + "00_color_picker_brightness_h.png",
        img_00_color_picker_color: imagesPath + "00_color_picker_color.png",
        img_00_color_picker_color_h: imagesPath + "00_color_picker_color_h.png",
        img_00_color_picker_custom_color: imagesPath + "00_color_picker_custom_color.png",
        img_00_color_picker_custom_color_h: imagesPath + "00_color_picker_custom_color_h.png",
        img_00_color_picker_handler: imagesPath + theme + "/" + "00_color_picker_handler.png",
        img_00_color_picker_handler_focus: imagesPath + "00_color_picker_handler_focus.png",
        img_00_color_picker_saturation: imagesPath + "00_color_picker_saturation.png",
        img_00_color_picker_saturation_h: imagesPath + "00_color_picker_saturation_h.png",
        img_00_contacts_button_bg_9: imagesPath + theme + "/" + "00_contacts_button_bg.9.sci",
        img_00_contacts_button_bg_dim_ef_9: imagesPath + theme + "/" + "00_contacts_button_bg_dim_ef.9.sci",
        img_00_contacts_button_bg_ef_9: imagesPath + theme + "/" + "00_contacts_button_bg_ef.9.sci",
        img_00_contacts_button_bg_press_ef_9: imagesPath + theme + "/" + "00_contacts_button_bg_press_ef.9.sci",
        img_00_contacts_button_focus_9: imagesPath + theme + "/" + "00_contacts_button_focus.9.sci",
        img_00_contacts_button_focus_ef_9: imagesPath + theme + "/" + "00_contacts_button_focus_ef.9.sci",
        img_00_date_picker_dot: imagesPath + "00_date_picker_dot.png",
        img_00_edit_field_clear: imagesPath + "00_edit_field_clear.png",
        img_00_edit_field_focus_9: imagesPath + "00_edit_field_focus.9.sci",
        img_00_edit_field_line_round_bg_01_9: imagesPath + "00_edit_field_line_round_bg_01.9.sci",
        img_00_edit_field_no_line_square_bg_9: imagesPath + "00_edit_field_no_line_square_bg.9.sci",
        img_00_edit_field_round_bg_9: imagesPath + "00_edit_field_round_bg.9.sci",
        img_00_edit_group_bg_9: imagesPath + "00_edit_group_bg.9.sci",
        img_00_edit_group_bg_bottom_9: imagesPath + "00_edit_group_bg_bottom.9.sci",
        img_00_edit_group_bg_bottom_ef_9: imagesPath + theme + "/" + "00_edit_group_bg_bottom_ef.9.sci",
        img_00_edit_group_bg_center_9: imagesPath + "00_edit_group_bg_center.9.sci",
        img_00_edit_group_bg_center_ef_9: imagesPath + theme + "/" + "00_edit_group_bg_center_ef.9.sci",
        img_00_edit_group_bg_ef_9: imagesPath + theme + "/" + "00_edit_group_bg_ef.9.sci",
        img_00_edit_group_bg_top_9: imagesPath + "00_edit_group_bg_top.9.sci",
        img_00_edit_group_bg_top_ef_9: imagesPath + theme + "/" + "00_edit_group_bg_top_ef.9.sci",
        img_00_effect_footer_bounce_left: imagesPath + theme + "/" + "00_effect_footer_bounce_left.png",
        img_00_effect_footer_bounce_left_h: imagesPath + theme + "/" + "00_effect_footer_bounce_left_h.png",
        img_00_effect_footer_bounce_right: imagesPath + theme + "/" + "00_effect_footer_bounce_right.png",
        img_00_effect_footer_bounce_right_h: imagesPath + theme + "/" + "00_effect_footer_bounce_right_h.png",
        img_00_effect_tab_bounce_left: imagesPath + theme + "/" + "00_effect_tab_bounce_left.png",
        img_00_effect_tab_bounce_left_02: imagesPath + theme + "/" + "00_effect_tab_bounce_left_02.png",
        img_00_effect_tab_bounce_left_h: imagesPath + theme + "/" + "00_effect_tab_bounce_left_h.png",
        img_00_effect_tab_bounce_right: imagesPath + theme + "/" + "00_effect_tab_bounce_right.png",
        img_00_effect_tab_bounce_right_02: imagesPath + theme + "/" + "00_effect_tab_bounce_right_02.png",
        img_00_effect_tab_bounce_right_h: imagesPath + theme + "/" + "00_effect_tab_bounce_right_h.png",
        img_00_effect_tab_text_dim_left_9: imagesPath + "00_effect_tab_text_dim_left.9.sci",
        img_00_effect_tab_text_dim_right_9: imagesPath + "00_effect_tab_text_dim_right.9.sci",
        img_00_effect_title_tab_bounce_left: imagesPath + theme + "/" + "00_effect_title_tab_bounce_left.png",
        img_00_effect_title_tab_bounce_right: imagesPath + theme + "/" + "00_effect_title_tab_bounce_right.png",
        img_00_effect_title_text_dim_left_9: imagesPath + "00_effect_title_text_dim_left.9.sci",
        img_00_effect_title_text_dim_right_9: imagesPath + "00_effect_title_text_dim_right.9.sci",
        img_00_expandable_bg_bottom_ef_9: imagesPath + theme + "/" + "00_expandable_bg_bottom_ef.9.sci",
        img_00_expandable_bg_center_ef_9: imagesPath + theme + "/" + "00_expandable_bg_center_ef.9.sci",
        img_00_expandable_bg_top_ef_9: imagesPath + theme + "/" + "00_expandable_bg_top_ef.9.sci",
        img_00_fast_scroll_handler_9: imagesPath + theme + "/" + "00_fast_scroll_handler.9.sci",
        img_00_fast_scroll_handler_h_9: imagesPath + theme + "/" + "00_fast_scroll_handler_h.9.sci",
        img_00_fast_scroll_popup_bg_9: imagesPath + theme + "/" + "00_fast_scroll_popup_bg.9.sci",
        img_00_fast_scroll_popup_bg_ef_9: imagesPath + theme + "/" + "00_fast_scroll_popup_bg_ef.9.sci",
        img_00_fast_scroll_rollover_bg_9: imagesPath + "00_fast_scroll_rollover_bg.9.sci",
        img_00_fast_scroll_rollover_bg_focus_9: imagesPath + "00_fast_scroll_rollover_bg_focus.9.sci",
        img_00_fast_scroll_rollover_bg_line_focus_9: imagesPath + theme + "/" + "00_fast_scroll_rollover_bg_line_focus.9.sci",
        img_00_focus_9: imagesPath + theme + "/" + "00_focus.9.sci",
        img_00_grid_select_check: imagesPath + "00_grid_select_check.png",
        img_00_grid_select_check_bg: imagesPath + "00_grid_select_check_bg.png",
        img_00_grid_select_check_bg_press: imagesPath + "00_grid_select_check_bg_press.png",
        img_00_groupedlist_bg_focus_9: imagesPath + "00_groupedlist_bg_focus.9.sci",
        img_00_groupedlist_bg_press_9: imagesPath + "00_groupedlist_bg_press.9.sci",
        img_00_groupedlist_bottom_bg_focus_9: imagesPath + "00_groupedlist_bottom_bg_focus.9.sci",
        img_00_groupedlist_bottom_bg_press_9: imagesPath + "00_groupedlist_bottom_bg_press.9.sci",
        img_00_groupedlist_center_bg_focus_9: imagesPath + "00_groupedlist_center_bg_focus.9.sci",
        img_00_groupedlist_center_bg_press_9: imagesPath + "00_groupedlist_center_bg_press.9.sci",
        img_00_groupedlist_top_bg_focus_9: imagesPath + "00_groupedlist_top_bg_focus.9.sci",
        img_00_groupedlist_top_bg_press_9: imagesPath + "00_groupedlist_top_bg_press.9.sci",
        img_00_header_process_01: imagesPath + theme + "/" + "00_header_process_01.png",
        img_00_header_process_02: imagesPath + theme + "/" + "00_header_process_02.png",
        img_00_header_process_03: imagesPath + theme + "/" + "00_header_process_03.png",
        img_00_header_process_04: imagesPath + theme + "/" + "00_header_process_04.png",
        img_00_header_process_05: imagesPath + theme + "/" + "00_header_process_05.png",
        img_00_header_process_06: imagesPath + theme + "/" + "00_header_process_06.png",
        img_00_header_process_07: imagesPath + theme + "/" + "00_header_process_07.png",
        img_00_header_process_08: imagesPath + theme + "/" + "00_header_process_08.png",
        img_00_header_process__9: imagesPath + theme + "/" + "00_header_process_09.png",
        img_00_header_process_10: imagesPath + theme + "/" + "00_header_process_10.png",
        img_00_header_process_11: imagesPath + theme + "/" + "00_header_process_11.png",
        img_00_header_process_12: imagesPath + theme + "/" + "00_header_process_12.png",
        img_00_header_process_13: imagesPath + theme + "/" + "00_header_process_13.png",
        img_00_header_process_14: imagesPath + theme + "/" + "00_header_process_14.png",
        img_00_header_process_15: imagesPath + theme + "/" + "00_header_process_15.png",
        img_00_header_process_16: imagesPath + theme + "/" + "00_header_process_16.png",
        img_00_header_process_17: imagesPath + theme + "/" + "00_header_process_17.png",
        img_00_header_process_18: imagesPath + theme + "/" + "00_header_process_18.png",
        img_00_header_process__9: imagesPath + theme + "/" + "00_header_process_19.png",
        img_00_header_process_20: imagesPath + theme + "/" + "00_header_process_20.png",
        img_00_header_process_21: imagesPath + theme + "/" + "00_header_process_21.png",
        img_00_header_process_22: imagesPath + theme + "/" + "00_header_process_22.png",
        img_00_header_process_23: imagesPath + theme + "/" + "00_header_process_23.png",
        img_00_header_process_24: imagesPath + theme + "/" + "00_header_process_24.png",
        img_00_header_process_25: imagesPath + theme + "/" + "00_header_process_25.png",
        img_00_header_process_26: imagesPath + theme + "/" + "00_header_process_26.png",
        img_00_header_process_27: imagesPath + theme + "/" + "00_header_process_27.png",
        img_00_header_process_28: imagesPath + theme + "/" + "00_header_process_28.png",
        img_00_header_process__9: imagesPath + theme + "/" + "00_header_process_29.png",
        img_00_header_process_30: imagesPath + theme + "/" + "00_header_process_30.png",
        img_00_icon_back: imagesPath + "00_icon_back.png",
        img_00_icon_back_ef: imagesPath + theme + "/" + "00_icon_back_ef.png",
        img_00_icon_Back_ef: imagesPath + theme + "/" + "00_icon_Back_ef.png",
        img_00_icon_Back_ef_02: imagesPath + theme + "/" + "00_icon_Back_ef_02.png",
        img_00_icon_back_trans_ef: imagesPath + theme + "/" + "00_icon_back_trans_ef.png",
        img_00_icon_Back_trans_ef: imagesPath + theme + "/" + "00_icon_Back_trans_ef.png",
        img_00_icon_focus: imagesPath + "00_icon_focus.png",
        img_00_icon_jump: imagesPath + theme + "/" + "00_icon_jump.png",
        img_00_icon_jump_ef: imagesPath + theme + "/" + "00_icon_jump_ef.png",
        img_00_icon_jump_left: imagesPath + theme + "/" + "00_icon_jump_left.png",
        img_00_icon_jump_left_ef: imagesPath + theme + "/" + "00_icon_jump_left_ef.png",
        img_00_icon_more: imagesPath + "00_icon_more.png",
        img_00_icon_more_ef: imagesPath + theme + "/" + "00_icon_more_ef.png",
        img_00_icon_SIP_close: imagesPath + "00_icon_SIP_close.png",
        img_00_icon_SIP_close_ef: imagesPath + theme + "/" + "00_icon_SIP_close_ef.png",
        img_00_indexlist_bg_9: imagesPath + "00_indexlist_bg.9.sci",
        img_00_indexlist_bg_ef_9: imagesPath + theme + "/" + "00_indexlist_bg_ef.9.sci",
        img_00_list_group_bg_9: imagesPath + "00_list_group_bg.9.sci",
        img_00_list_group_bg_bottom_9: imagesPath + "00_list_group_bg_bottom.9.sci",
        img_00_list_group_bg_bottom_ef_9: imagesPath + theme + "/" + "00_list_group_bg_bottom_ef.9.sci",
        img_00_list_group_bg_center_9: imagesPath + "00_list_group_bg_center.9.sci",
        img_00_list_group_bg_center_ef_9: imagesPath + theme + "/" + "00_list_group_bg_center_ef.9.sci",
        img_00_list_group_bg_ef_9: imagesPath + theme + "/" + "00_list_group_bg_ef.9.sci",
        img_00_list_group_bg_top_9: imagesPath + "00_list_group_bg_top.9.sci",
        img_00_list_group_bg_top_ef_9: imagesPath + theme + "/" + "00_list_group_bg_top_ef.9.sci",
        img_00_list_group_bottom_cover_round_bg_normal_9: imagesPath + "00_list_group_bottom_cover_round_bg_normal.9.sci",
        img_00_list_group_center_cover_round_bg_normal_9: imagesPath + "00_list_group_center_cover_round_bg_normal.9.sci",
        img_00_list_group_press_bg_9: imagesPath + "00_list_group_press_bg.9.sci",
        img_00_list_group_press_bg_bottom_9: imagesPath + "00_list_group_press_bg_bottom.9.sci",
        img_00_list_group_press_bg_center_9: imagesPath + "00_list_group_press_bg_center.9.sci",
        img_00_list_group_press_bg_top_9: imagesPath + "00_list_group_press_bg_top.9.sci",
        img_00_list_group_single_cover_round_bg_normal_9: imagesPath + "00_list_group_single_cover_round_bg_normal.9.sci",
        img_00_list_group_top_cover_round_bg_normal_9: imagesPath + "00_list_group_top_cover_round_bg_normal.9.sci",
        img_00_list_process_01: imagesPath + theme + "/" + "00_list_process_01.png",
        img_00_list_process_02: imagesPath + theme + "/" + "00_list_process_02.png",
        img_00_list_process_03: imagesPath + theme + "/" + "00_list_process_03.png",
        img_00_list_process_04: imagesPath + theme + "/" + "00_list_process_04.png",
        img_00_list_process_05: imagesPath + theme + "/" + "00_list_process_05.png",
        img_00_list_process_06: imagesPath + theme + "/" + "00_list_process_06.png",
        img_00_list_process_07: imagesPath + theme + "/" + "00_list_process_07.png",
        img_00_list_process_08: imagesPath + theme + "/" + "00_list_process_08.png",
        img_00_list_process__9: imagesPath + theme + "/" + "00_list_process_09.png",
        img_00_list_process_10: imagesPath + theme + "/" + "00_list_process_10.png",
        img_00_list_process_11: imagesPath + theme + "/" + "00_list_process_11.png",
        img_00_list_process_12: imagesPath + theme + "/" + "00_list_process_12.png",
        img_00_list_process_13: imagesPath + theme + "/" + "00_list_process_13.png",
        img_00_list_process_14: imagesPath + theme + "/" + "00_list_process_14.png",
        img_00_list_process_15: imagesPath + theme + "/" + "00_list_process_15.png",
        img_00_list_process_16: imagesPath + theme + "/" + "00_list_process_16.png",
        img_00_list_process_17: imagesPath + theme + "/" + "00_list_process_17.png",
        img_00_list_process_18: imagesPath + theme + "/" + "00_list_process_18.png",
        img_00_list_process__9: imagesPath + theme + "/" + "00_list_process_19.png",
        img_00_list_process_20: imagesPath + theme + "/" + "00_list_process_20.png",
        img_00_list_process_21: imagesPath + theme + "/" + "00_list_process_21.png",
        img_00_list_process_22: imagesPath + theme + "/" + "00_list_process_22.png",
        img_00_list_process_23: imagesPath + theme + "/" + "00_list_process_23.png",
        img_00_list_process_24: imagesPath + theme + "/" + "00_list_process_24.png",
        img_00_list_process_25: imagesPath + theme + "/" + "00_list_process_25.png",
        img_00_list_process_26: imagesPath + theme + "/" + "00_list_process_26.png",
        img_00_list_process_27: imagesPath + theme + "/" + "00_list_process_27.png",
        img_00_list_process_28: imagesPath + theme + "/" + "00_list_process_28.png",
        img_00_list_process__9: imagesPath + theme + "/" + "00_list_process_29.png",
        img_00_list_process_30: imagesPath + theme + "/" + "00_list_process_30.png",
        img_00_more_popup_press_9: imagesPath + theme + "/" + "00_more_popup_press.9.sci",
        img_00_option_panel_contextual_popup_arrow: imagesPath + "00_option_panel_contextual_popup_arrow.png",
        img_00_option_panel_handle_bg: imagesPath + "00_option_panel_handle_bg.png",
        img_00_option_panel_handle_bg_ef: imagesPath + theme + "/" + "00_option_panel_handle_bg_ef.png",
        img_00_option_panel_handle_bg_ef_press: imagesPath + theme + "/" + "00_option_panel_handle_bg_ef_press.png",
        img_00_option_panel_handle_bg_press: imagesPath + "00_option_panel_handle_bg_press.png",
        img_00_option_panel_handle_more: imagesPath + "00_option_panel_handle_more.png",
        img_00_option_panel_handle_more_press: imagesPath + "00_option_panel_handle_more_press.png",
        img_00_overscrolling_bottom_9: imagesPath + theme + "/" + "00_overscrolling_bottom.9.sci",
        img_00_overscrolling_left_9: imagesPath + theme + "/" + "00_overscrolling_left.9.sci",
        img_00_overscrolling_right_9: imagesPath + theme + "/" + "00_overscrolling_right.9.sci",
        img_00_overscrolling_top_9: imagesPath + theme + "/" + "00_overscrolling_top.9.sci",
        img_00_panel_bg_9: imagesPath + "00_panel_bg.9.sci",
        img_00_panel_handle_arrow: imagesPath + "00_panel_handle_arrow.png",
        img_00_panel_handle_bg_9: imagesPath + "00_panel_handle_bg.9.sci",
        img_00_panel_handle_bg_ef_9: imagesPath + theme + "/" + "00_panel_handle_bg_ef.9.sci",
        img_00_panel_handle_bg_ef_press_9: imagesPath + theme + "/" + "00_panel_handle_bg_ef_press.9.sci",
        img_00_panel_list_bg_ef_press_9: imagesPath + theme + "/" + "00_panel_list_bg_ef_press.9.sci",
        img_00_panel_list_bg_press_9: imagesPath + "00_panel_list_bg_press.9.sci",
        img_00_picker_button_9: imagesPath + "00_picker_button.9.sci",
        img_00_picker_button_dim_ef_9: imagesPath + theme + "/" + "00_picker_button_dim_ef.9.sci",
        img_00_picker_button_ef_9: imagesPath + theme + "/" + "00_picker_button_ef.9.sci",
        img_00_picker_button_focus_9: imagesPath + "00_picker_button_focus.9.sci",
        img_00_picker_button_press_ef_9: imagesPath + theme + "/" + "00_picker_button_press_ef.9.sci",
        img_00_popup_bg_9: imagesPath + "00_popup_bg.9.sci",
        img_00_popup_bg_ef_9: imagesPath + theme + "/" + "00_popup_bg_ef.9.sci",
        img_00_popup_bottom_bg_9: imagesPath + "00_popup_bottom_bg.9.sci",
        img_00_popup_bottom_ef_9: imagesPath + theme + "/" + "00_popup_bottom_ef.9.sci",
        img_00_popup_bubble_02_bg_9: imagesPath + "00_popup_bubble_02_bg.9.sci",
        img_00_popup_bubble_02_ef_9: imagesPath + theme + "/" + "00_popup_bubble_02_ef.9.sci",
        img_00_popup_bubble_bg_9: imagesPath + "00_popup_bubble_bg.9.sci",
        img_00_popup_bubble_bg_ef_9: imagesPath + theme + "/" + "00_popup_bubble_bg_ef.9.sci",
        img_00_popup_bubble_tail_bottom: imagesPath + theme + "/" + "00_popup_bubble_tail_bottom.png",
        img_00_popup_bubble_tail_bottom_ef: imagesPath + theme + "/" + "00_popup_bubble_tail_bottom_ef.png",
        img_00_popup_bubble_tail_left: imagesPath + theme + "/" + "00_popup_bubble_tail_left.png",
        img_00_popup_bubble_tail_left_ef: imagesPath + theme + "/" + "00_popup_bubble_tail_left_ef.png",
        img_00_popup_bubble_tail_right: imagesPath + theme + "/" + "00_popup_bubble_tail_right.png",
        img_00_popup_bubble_tail_right_ef: imagesPath + theme + "/" + "00_popup_bubble_tail_right_ef.png",
        img_00_popup_bubble_tail_top: imagesPath + theme + "/" + "00_popup_bubble_tail_top.png",
        img_00_popup_bubble_tail_top_ef: imagesPath + theme + "/" + "00_popup_bubble_tail_top_ef.png",
        img_00_popup_button_dim_ef_9: imagesPath + theme + "/" + "00_popup_button_dim_ef.9.sci",
        img_00_popup_button_focus_9: imagesPath + "00_popup_button_focus.9.sci",
        img_00_popup_button_normal_bg_9: imagesPath + "00_popup_button_normal_bg.9.sci",
        img_00_popup_button_normal_ef_9: imagesPath + theme + "/" + "00_popup_button_normal_ef.9.sci",
        img_00_popup_button_press_ef_9: imagesPath + theme + "/" + "00_popup_button_press_ef.9.sci",
        img_00_popup_dim_lighting_h: imagesPath + "00_popup_dim_lighting_h.png",
        img_00_popup_dim_lighting_v: imagesPath + "00_popup_dim_lighting_v.png",
        img_00_popup_scroll_9: imagesPath + theme + "/" + "00_popup_scroll.9.sci",
        img_00_popup_title_bg_9: imagesPath + "00_popup_title_bg.9.sci",
        img_00_popup_title_ef_9: imagesPath + theme + "/" + "00_popup_title_ef.9.sci",
        img_00_progress_bar_9: imagesPath + "00_progress_bar.9.sci",
        img_00_progress_bar_ef_9: imagesPath + theme + "/" + "00_progress_bar_ef.9.sci",
        img_00_progress_bg_9: imagesPath + "00_progress_bg.9.sci",
        img_00_progress_ef_bg_9: imagesPath + theme + "/" + "00_progress_ef_bg.9.sci",
        img_00_quick_menu_bg_9: imagesPath + "00_quick_menu_bg.9.sci",
        img_00_quick_menu_bg_ef_9: imagesPath + "00_quick_menu_bg_ef.9.sci",
        img_00_scroll_bar_h_9: imagesPath + theme + "/" + "00_scroll_bar_h.9.sci",
        img_00_scroll_bar_handler_h: imagesPath + theme + "/" + "00_scroll_bar_handler_h.png",
        img_00_scroll_bar_handler_v: imagesPath + theme + "/" + "00_scroll_bar_handler_v.png",
        img_00_scroll_bar_h_ef_9: imagesPath + theme + "/" + "00_scroll_bar_h_ef.9.sci",
        img_00_scroll_bar_v_9: imagesPath + theme + "/" + "00_scroll_bar_v.9.sci",
        img_00_scroll_bar_v_ef_9: imagesPath + theme + "/" + "00_scroll_bar_v_ef.9.sci",
        img_00_search_bg_9: imagesPath + "00_search_bg.9.sci",
        img_00_search_bg_ef_9: imagesPath + theme + "/" + "00_search_bg_ef.9.sci",
        img_00_search_edit_field_bg_9: imagesPath + "00_search_edit_field_bg.9.sci",
        img_00_search_edit_field_bg_ef_9: imagesPath + theme + "/" + "00_search_edit_field_bg_ef.9.sci",
        img_00_search_edit_field_focus_9: imagesPath + "00_search_edit_field_focus.9.sci",
        img_00_search_icon: imagesPath + "00_search_icon.png",
        img_00_search_icon_ef: imagesPath + theme + "/" + "00_search_icon_ef.png",
        img_00_slider_handle: imagesPath + "00_slider_handle.png",
        img_00_slider_handle_ef: imagesPath + theme + "/" + "00_slider_handle_ef.png",
        img_00_slider_handle_ef_dim: imagesPath + theme + "/" + "00_slider_handle_ef_dim.png",
        img_00_slider_handle_ef_press: imagesPath + theme + "/" + "00_slider_handle_ef_press.png",
        img_00_slider_handle_focus: imagesPath + "00_slider_handle_focus.png",
        img_00_slider_popup_bg_9: imagesPath + "00_slider_popup_bg.9.sci",
        img_00_softkey_icon_add: imagesPath + "00_softkey_icon_add.png",
        img_00_softkey_icon_zoom: imagesPath + "00_softkey_icon_zoom.png",
        img_00_softkey_left_bg: imagesPath + "00_softkey_left_bg.png",
        img_00_softkey_left_bg_ef: imagesPath + theme + "/" + "00_softkey_left_bg_ef.png",
        img_00_softkey_left_bg_ef_press: imagesPath + theme + "/" + "00_softkey_left_bg_ef_press.png",
        img_00_softkey_left_text_bg: imagesPath + "00_softkey_left_text_bg.png",
        img_00_softkey_left_text_bg_ef: imagesPath + theme + "/" + "00_softkey_left_text_bg_ef.png",
        img_00_softkey_left_text_bg_ef_press: imagesPath + theme + "/" + "00_softkey_left_text_bg_ef_press.png",
        img_00_softkey_right_bg: imagesPath + "00_softkey_right_bg.png",
        img_00_softkey_right_bg_ef: imagesPath + theme + "/" + "00_softkey_right_bg_ef.png",
        img_00_softkey_right_bg_ef_press: imagesPath + theme + "/" + "00_softkey_right_bg_ef_press.png",
        img_00_softkey_right_text_bg: imagesPath + "00_softkey_right_text_bg.png",
        img_00_softkey_right_text_bg_ef: imagesPath + theme + "/" + "00_softkey_right_text_bg_ef.png",
        img_00_softkey_right_text_bg_ef_press: imagesPath + theme + "/" + "00_softkey_right_text_bg_ef_press.png",
        img_00_split_handler_bg_9: imagesPath + "00_split_handler_bg.9.sci",
        img_00_split_handler_bg_ef_h_9: imagesPath + theme + "/" + "00_split_handler_bg_ef_h.9.sci",
        img_00_split_handler_bg_ef_v_9: imagesPath + theme + "/" + "00_split_handler_bg_ef_v.9.sci",
        img_00_split_handler_h: imagesPath + theme + "/" + "00_split_handler_h.png",
        img_00_split_handler_v: imagesPath + theme + "/" + "00_split_handler_v.png",
        img_00_sub_title_ef_9: imagesPath + theme + "/" + "00_sub_title_ef.9.sci",
        img_00_system_control_bg_9: imagesPath + "00_system_control_bg.9.png",
        img_00_tab_bg_9: imagesPath + "00_tab_bg.9.sci",
        img_00_tab_focus_9: imagesPath + "00_tab_focus.9.sci",
        img_00_tab_press_bg_9: imagesPath + "00_tab_press_bg.9.sci",
        img_00_tab_press_ef_9: imagesPath + theme + "/" + "00_tab_press_ef.9.sci",
        img_00_tab_select_bar_9: imagesPath + "00_tab_select_bar.9.sci",
        img_00_thumbs_bg_focus_9: imagesPath + "00_thumbs_bg_focus.9.sci",
        img_00_thumbs_line_bg_9: imagesPath + "00_thumbs_line_bg.9.sci",
        img_00_time_picker_keypad_bg_9: imagesPath + "00_time_picker_keypad_bg.9.sci",
        img_00_time_picker_keypad_button_bg_9: imagesPath + "00_time_picker_keypad_button_bg.9.sci",
        img_00_time_picker_keypad_button_bg_ef_9: imagesPath + "00_time_picker_keypad_button_bg_ef.9.sci",
        img_00_time_picker_number_bg_9: imagesPath + "00_time_picker_number_bg.9.sci",
        img_00_time_picker_tail: imagesPath + "00_time_picker_tail.png",
        img_00_time_picker_tail_01: imagesPath + "00_time_picker_tail_01.png",
        img_00_title_bg_9: imagesPath + "00_title_bg.9.sci",
        img_00_title_bg_ef_9: imagesPath + theme + "/" + "00_title_bg_ef.9.sci",
        img_00_title_press_ef_9: imagesPath + theme + "/" + "00_title_press_ef.9.sci",
        img_00_toolbar_bg_9: imagesPath + "00_toolbar_bg.9.sci",
        img_00_toolbar_bg_ef_9: imagesPath + theme + "/" + "00_toolbar_bg_ef.9.sci",
        img_00_toolbar_bg_shadow_9: imagesPath + theme + "/" + "00_toolbar_bg_shadow.9.sci",
        img_00_toolbar_button_9: imagesPath + theme + "/" + "00_toolbar_button.9.sci",
        img_00_toolbar_button_bg_9: imagesPath + "00_toolbar_button_bg.9.sci",
        img_00_toolbar_button_bg_dim_ef_9: imagesPath + theme + "/" + "00_toolbar_button_bg_dim_ef.9.sci",
        img_00_toolbar_button_bg_ef_9: imagesPath + theme + "/" + "00_toolbar_button_bg_ef.9.sci",
        img_00_toolbar_button_ef_9: imagesPath + theme + "/" + "00_toolbar_button_ef.9.sci",
        img_00_toolbar_button_ef_focus_9: imagesPath + "00_toolbar_button_ef_focus.9.sci",
        img_00_toolbar_button_ef_press_9: imagesPath + theme + "/" + "00_toolbar_button_ef_press.9.sci",
        img_00_toolbar_button_focus_9: imagesPath + "00_toolbar_button_focus.9.sci",
        img_00_toolbar_button_press_9: imagesPath + theme + "/" + "00_toolbar_button_press.9.sci",
        img_00_toolbar_button_press_ef_9: imagesPath + theme + "/" + "00_toolbar_button_press_ef.9.sci",
        img_00_toolbar_ef_press_9: imagesPath + "00_toolbar_ef_press.9.png",
        img_00_toolbar_press_9: imagesPath + "00_toolbar_press.9.sci",
        img_00_toolbar_press_ef_9: imagesPath + theme + "/" + "00_toolbar_press_ef.9.sci",
        img_copy_and_paste_Handler_center: imagesPath + "copy_and_paste_Handler_center.png",
        img_copy_and_paste_Handler_center_reverse: imagesPath + "copy_and_paste_Handler_center_reverse.png",
        img_copy_and_paste_Handler_left: imagesPath + "copy_and_paste_Handler_left.png",
        img_copy_and_paste_Handler_left_01: imagesPath + "copy_and_paste_Handler_left_01.png",
        img_copy_and_paste_Handler_left_reverse: imagesPath + "copy_and_paste_Handler_left_reverse.png",
        img_copy_and_paste_Handler_right: imagesPath + "copy_and_paste_Handler_right.png",
        img_copy_and_paste_icon_search: imagesPath + "copy_and_paste_icon_search.png",
        img_copy_and_paste_Magnifier_9: imagesPath + "copy_and_paste_Magnifier.9.sci",
        img_copy_and_paste_Magnifier_mask_9: imagesPath + "copy_and_paste_Magnifier_mask.9.sci",
        img_pd_btn_bg_9: imagesPath + theme + "/" + "pd_btn_bg.9.sci",
        img_pd_btn_bg_arrow_down: imagesPath + theme + "/" + "pd_btn_bg_arrow_down.png",
        img_pd_btn_bg_arrow_up: imagesPath + theme + "/" + "pd_btn_bg_arrow_up.png",
        img_TTS_focus_9: imagesPath + "TTS_focus.9.sci",
        img_TTS_popup_bg_9: imagesPath + "TTS_popup_bg.9.sci",
    }
    return images
}
